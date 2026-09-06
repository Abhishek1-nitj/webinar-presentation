import { motion, AnimatePresence } from 'framer-motion';
import { useTimer } from '../context/TimerContext';

const packageFeatures = [
  'Excel Basics ➔ Intermediate ➔ Advanced ➔ Pro',
  'Detailed, industry-level assignments with complete solutions for practice',
  'Most advanced AI + Excel tools and workflows',
  'In-depth technical interview preparation',
  '80+ industry-level, ready-made Excel projects',
  'Latest Microsoft Office 365 official license',
  'Entire Recording of the Masterclass',
  'Master Prompt Doc',
];

const SlideCountdownTimer = () => {
  const {
    timeLeft,
    initialMinutes,
    initialSeconds,
    isRunning,
    isAlarmPlaying,
    setInitialMinutes,
    setInitialSeconds,
    startTimer,
    stopTimer,
    resetTimer,
    setPreset,
    stopAlarm,
    formatTime,
    setTimeLeft,
  } = useTimer();

  const totalCurrentSet = Math.max(initialMinutes * 60 + initialSeconds, 1);
  const progressPercent = ((totalCurrentSet - timeLeft) / totalCurrentSet) * 100;

  return (
    <section
      id="slide-countdown-timer"
      className="slide-section min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 py-10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-[#0B0C10] to-[#16181E]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.14),transparent_65%)]" />
      <div className="absolute -top-28 right-[-8%] h-80 w-80 rounded-full bg-premium-gold/15 blur-3xl" />
      <div className="absolute -bottom-24 left-[-5%] h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* LEFT COLUMN: Complete Advanced Excel + AI Package Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6"
        >
          <div className="space-y-2 border-b border-white/10 pb-4 text-left">
            <span className="inline-block px-3 py-1 rounded-full border border-premium-gold/40 bg-premium-gold/10 text-premium-gold text-xs font-bold tracking-widest uppercase">
              Everything Included
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Complete Advanced Excel + AI Package
            </h3>
          </div>

          <ul className="space-y-3 text-left">
            {packageFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-white/90 text-sm sm:text-base leading-snug">
                <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-black text-xs border border-emerald-500/40">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <span>✨ Full Lifetime Access &amp; Updates</span>
            <span>🎓 Official Certificate Included</span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Special Webinar Price + Interactive Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`lg:col-span-6 flex flex-col justify-between items-center text-center rounded-3xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 shadow-2xl relative overflow-hidden space-y-6 ${
            isAlarmPlaying
              ? 'border-red-500/90 bg-red-950/50 shadow-[0_0_90px_rgba(239,68,68,0.7)] animate-pulse'
              : 'border-premium-gold/30 bg-gradient-to-b from-white/[0.04] to-black/60 hover:border-premium-gold/50'
          }`}
        >
          {/* Header & Price */}
          <div className="space-y-2 w-full">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Special Webinar Price{' '}
              <span className="text-premium-gold drop-shadow-[0_0_30px_rgba(218,165,32,0.6)]">
                ₹2,999
              </span>
            </h2>
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              ⏳ Only available for 30 minutes (Till the timer ends)
            </div>
          </div>

          {/* Timer Card Display */}
          <div className="w-full py-4 px-2">
            {/* Progress bar line */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-6">
              <div
                className={`h-full transition-all duration-1000 ${
                  isAlarmPlaying ? 'bg-red-500' : 'bg-gradient-to-r from-premium-gold via-yellow-300 to-premium-gold'
                }`}
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />
            </div>

            {/* Big MM:SS Clock */}
            <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-widest leading-none select-none text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]">
              <span className={timeLeft === 0 ? 'text-red-400 drop-shadow-[0_0_40px_rgba(248,113,113,0.8)]' : 'text-white'}>
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* Alarm status banner */}
            <AnimatePresence>
              {isAlarmPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/25 border border-red-500/70 text-red-200 font-bold text-xs sm:text-sm tracking-wide animate-pulse"
                >
                  <span>🔔 Time&apos;s Up! Offer Window Expired</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls: Start / Pause / Reset */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="px-7 py-3 rounded-2xl bg-gradient-to-r from-premium-gold to-yellow-500 hover:from-yellow-400 hover:to-premium-gold text-black font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(218,165,32,0.4)] hover:shadow-[0_0_35px_rgba(218,165,32,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                ▶ Start Timer
              </button>
            ) : (
              <button
                onClick={stopTimer}
                className="px-7 py-3 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 font-extrabold text-sm sm:text-base tracking-wide shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                ⏸ Pause / Stop
              </button>
            )}

            <button
              onClick={resetTimer}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-sm sm:text-base tracking-wide hover:border-white/30 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              ↺ Reset
            </button>

            {isAlarmPlaying && (
              <button
                onClick={stopAlarm}
                className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(220,38,38,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                🔕 Mute Alarm
              </button>
            )}
          </div>

          {/* Quick Set & Custom Inputs */}
          <div className="flex flex-wrap items-center justify-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-2.5 w-full">
            <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">
              Quick Set:
            </span>
            <button
              onClick={() => setPreset(30, 0)}
              className={`px-3.5 py-1 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                initialMinutes === 30 && initialSeconds === 0 && !isRunning
                  ? 'bg-premium-gold/25 border border-premium-gold text-premium-gold shadow-[0_0_15px_rgba(218,165,32,0.35)]'
                  : 'bg-white/5 hover:bg-white/15 border border-white/10 text-white/80'
              }`}
            >
              30 Mins
            </button>

            <div className="h-3.5 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <span>Custom:</span>
              <input
                type="number"
                min="0"
                max="99"
                value={initialMinutes}
                onChange={(e) => {
                  const val = Math.max(0, parseInt(e.target.value, 10) || 0);
                  setInitialMinutes(val);
                  if (!isRunning) setTimeLeft(val * 60 + initialSeconds);
                }}
                className="w-10 text-center rounded-lg border border-white/15 bg-white/5 py-0.5 text-xs font-bold text-white focus:border-premium-gold focus:outline-none"
              />
              <span>m</span>
              <input
                type="number"
                min="0"
                max="59"
                value={initialSeconds}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(59, parseInt(e.target.value, 10) || 0));
                  setInitialSeconds(val);
                  if (!isRunning) setTimeLeft(initialMinutes * 60 + val);
                }}
                className="w-10 text-center rounded-lg border border-white/15 bg-white/5 py-0.5 text-xs font-bold text-white focus:border-premium-gold focus:outline-none"
              />
              <span>s</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SlideCountdownTimer;
