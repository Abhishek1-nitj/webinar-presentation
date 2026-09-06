import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const TimerContext = createContext(null);

export const TimerProvider = ({ children }) => {
  const [initialMinutes, setInitialMinutes] = useState(30);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
  
  // Flash overlay state
  const [flashInfo, setFlashInfo] = useState({ visible: false, message: '' });

  const audioCtxRef = useRef(null);
  const alarmIntervalRef = useRef(null);
  const flashTimeoutRef = useRef(null);
  const lastFlashedTimeRef = useRef(null);

  // Audio synthesizer for alarms and urgent warnings
  const getAudioContext = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  // Alarming urgent siren/beep for the flash popup
  const playAlarmingChime = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      // Pulse 1
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(800, now);
      osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.18);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.19);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.2);

      // Pulse 2
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(800, now + 0.22);
      osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
      gain2.gain.setValueAtTime(0.35, now + 0.22);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.42);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.22);
      osc2.stop(now + 0.43);
    } catch {
      // ignore
    }
  }, [getAudioContext]);

  const playAlarmBeep = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.25);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch {
      // ignore
    }
  }, [getAudioContext]);

  const startAlarm = useCallback(() => {
    setIsAlarmPlaying(true);
    playAlarmBeep();
    if (alarmIntervalRef.current) clearInterval(alarmIntervalRef.current);
    alarmIntervalRef.current = setInterval(() => {
      playAlarmBeep();
    }, 550);
  }, [playAlarmBeep]);

  const stopAlarm = useCallback(() => {
    setIsAlarmPlaying(false);
    if (alarmIntervalRef.current) {
      clearInterval(alarmIntervalRef.current);
      alarmIntervalRef.current = null;
    }
  }, []);

  const triggerFlash = useCallback((message) => {
    playAlarmingChime();
    setFlashInfo({ visible: true, message });
    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = setTimeout(() => {
      setFlashInfo({ visible: false, message: '' });
    }, 3000);
  }, [playAlarmingChime]);

  // Main countdown ticker (set to trigger every 5 seconds for testing)
  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            startAlarm();
            triggerFlash("Time's Up!");
            return 0;
          }
          const nextVal = prev - 1;

          // Flash alert triggers only twice: at 15 Minutes Left and 5 Minutes Left
          if (nextVal === 15 * 60) {
            if (lastFlashedTimeRef.current !== 15) {
              lastFlashedTimeRef.current = 15;
              triggerFlash("15 Minutes Left");
            }
          } else if (nextVal === 5 * 60) {
            if (lastFlashedTimeRef.current !== 5) {
              lastFlashedTimeRef.current = 5;
              triggerFlash("5 Minutes Left");
            }
          }

          return nextVal;
        });
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      startAlarm();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, startAlarm, triggerFlash]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (alarmIntervalRef.current) clearInterval(alarmIntervalRef.current);
      if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    stopAlarm();
    getAudioContext();
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  }, [getAudioContext, stopAlarm, timeLeft]);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    stopAlarm();
  }, [stopAlarm]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    stopAlarm();
    lastFlashedTimeRef.current = null;
    setTimeLeft(initialMinutes * 60 + initialSeconds);
    setFlashInfo({ visible: false, message: '' });
  }, [initialMinutes, initialSeconds, stopAlarm]);

  const setPreset = useCallback((mins, secs = 0) => {
    setIsRunning(false);
    stopAlarm();
    lastFlashedTimeRef.current = null;
    setInitialMinutes(mins);
    setInitialSeconds(secs);
    setTimeLeft(mins * 60 + secs);
    setFlashInfo({ visible: false, message: '' });
  }, [stopAlarm]);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timeLeft,
        initialMinutes,
        initialSeconds,
        isRunning,
        isAlarmPlaying,
        flashInfo,
        setInitialMinutes,
        setInitialSeconds,
        startTimer,
        stopTimer,
        resetTimer,
        setPreset,
        stopAlarm,
        formatTime,
        setTimeLeft,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
