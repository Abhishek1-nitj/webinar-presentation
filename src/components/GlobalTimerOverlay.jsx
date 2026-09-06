import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimer } from '../context/TimerContext';

const GlobalTimerOverlay = () => {
  const {
    timeLeft,
    isRunning,
    isAlarmPlaying,
    flashInfo,
    startTimer,
    stopTimer,
    stopAlarm,
    formatTime,
  } = useTimer();

  const [isPastTimerSlide, setIsPastTimerSlide] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const checkPosition = () => {
      const timerEl = document.getElementById('slide-countdown-timer');
      if (!timerEl) return;
      const rect = timerEl.getBoundingClientRect();
      // Only true once the user has scrolled to or past the countdown timer slide
      setIsPastTimerSlide(rect.top <= window.innerHeight * 0.6);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        checkPosition();
      });
    };

    checkPosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTimerSlide = () => {
    const el = document.getElementById('slide-countdown-timer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Only show floating corner widget if:
  // 1. User has reached or passed the countdown timer slide
  // 2. AND timer is actively running (or alarm is sounding)
  const showFloatingWidget = isPastTimerSlide && (isRunning || isAlarmPlaying);

  return (
    <>
      {/* 1. Floating Corner Timer (only appears from countdown slide onwards AND while running) */}
      <AnimatePresence>
        {showFloatingWidget && (
          <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border backdrop-blur-md shadow-2xl transition-all duration-300 ${
                isAlarmPlaying
                  ? 'border-red-500 bg-red-950/90 shadow-[0_0_35px_rgba(239,68,68,0.8)] animate-pulse'
                  : 'border-premium-gold/50 bg-black/85 shadow-[0_0_20px_rgba(218,165,32,0.35)]'
              }`}
            >
              {/* Status Indicator dot */}
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isAlarmPlaying
                    ? 'bg-red-500 animate-ping'
                    : 'bg-emerald-400 animate-pulse'
                }`}
              />

              {/* Time Display (clickable to scroll to full slide) */}
              <button
                onClick={scrollToTimerSlide}
                title="Click to view full timer slide"
                className="font-mono text-sm md:text-base font-black tracking-wider text-white hover:text-premium-gold transition-colors cursor-pointer"
              >
                {formatTime(timeLeft)}
              </button>

              {/* Mini Play / Pause button */}
              {!isRunning ? (
                <button
                  onClick={startTimer}
                  title="Start Timer"
                  className="h-6 w-6 rounded-lg bg-premium-gold/20 hover:bg-premium-gold/40 border border-premium-gold/40 flex items-center justify-center text-premium-gold text-xs font-bold transition-all cursor-pointer"
                >
                  ▶
                </button>
              ) : (
                <button
                  onClick={stopTimer}
                  title="Pause Timer"
                  className="h-6 w-6 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/40 flex items-center justify-center text-amber-300 text-xs font-bold transition-all cursor-pointer"
                >
                  ⏸
                </button>
              )}

              {isAlarmPlaying && (
                <button
                  onClick={stopAlarm}
                  className="px-2 py-0.5 rounded-lg bg-red-600 text-white text-xs font-bold animate-bounce cursor-pointer"
                >
                  Mute
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Fullscreen Alarming Red Flash Alert */}
      <AnimatePresence>
        {flashInfo.visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-screen h-screen z-[99999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl pointer-events-none overflow-hidden"
          >
            {/* Pulsing Emergency Red Light & Siren Glow Layers */}
            <div className="absolute inset-0 bg-red-600/20 animate-ping opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-black to-red-950/80 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.45),transparent_70%)] pointer-events-none animate-pulse" />
            
            {/* Screen edge emergency red border flash */}
            <div className="absolute inset-0 border-[12px] md:border-[16px] border-red-500/80 animate-pulse shadow-[inset_0_0_80px_rgba(239,68,68,0.9)]" />

            {/* Glowing Red Corner Beacons */}
            <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-red-500 blur-xl animate-ping" />
            <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-red-500 blur-xl animate-ping" />
            <div className="absolute bottom-6 left-6 h-12 w-12 rounded-full bg-red-500 blur-xl animate-ping" />
            <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-red-500 blur-xl animate-ping" />

            {/* Central High-Impact Alarm Card */}
            <motion.div
              initial={{ scale: 0.75, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 1.15, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center px-8 md:px-16 py-12 md:py-16 rounded-[3.5rem] border-2 border-red-500/80 bg-red-950/60 shadow-[0_0_120px_rgba(239,68,68,0.85)] max-w-5xl mx-4 space-y-6"
            >
              {/* Emergency Beacon Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border-2 border-red-500 bg-red-600/30 text-red-200 text-sm md:text-lg font-black uppercase tracking-[0.35em] shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-pulse">
                <span className="text-xl md:text-2xl">🚨</span>
                <span>URGENT TIME REMINDER</span>
                <span className="text-xl md:text-2xl">🚨</span>
              </div>
              
              {/* Huge Alarming Message */}
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-[0_0_50px_rgba(255,255,255,0.7)] leading-none">
                <span className="text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]">
                  {flashInfo.message}
                </span>
              </h1>

              <p className="text-red-300/90 text-lg md:text-2xl font-bold tracking-widest uppercase">
                ⏰ Special Price Window Expiring Soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalTimerOverlay;
