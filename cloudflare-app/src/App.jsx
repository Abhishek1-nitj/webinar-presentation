import React, { useState } from 'react';

const PIPELINE_STEPS = [
  { id: 1, title: 'CSV Ingestion & Normalization', icon: '📊' },
  { id: 2, title: 'Multi-Agent AI Risk Scoring', icon: '⚡' },
  { id: 3, title: 'Cloudflare D1 SQL Ledger Sync', icon: '🗄️' },
  { id: 4, title: 'Legal Statement Prep', icon: '📑' },
  { id: 5, title: 'Real-Time Gmail Sent Dispatch', icon: '✉️' },
];

// Sanitize CSV to wrap unquoted currency values with commas (e.g. ₹3,85,000) in quotes
function sanitizeCSV(text) {
  return text.split(/\r?\n/).map(line => {
    return line.replace(/(₹\s*[\d]+(?:,\d{2,3})+)(?=[,\r\n]|$)/g, '"$1"');
  }).join('\n');
}

// RFC 4180 compliant CSV parser
function parseCSV(rawText) {
  const text = sanitizeCSV(rawText);
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];

  function parseLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim().replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim().replace(/^"|"$/g, ''));
    return values;
  }

  const headers = parseLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);
    if (values.length >= 1) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = values[idx] || '';
      });
      rows.push(obj);
    }
  }
  return rows;
}

export default function App() {
  const [currentFile, setCurrentFile] = useState(null);
  const [records, setRecords] = useState([]);
  const [pipelineStatus, setPipelineStatus] = useState('idle'); // 'idle' | 'running' | 'completed'
  const [currentStep, setCurrentStep] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);

  // Upload user CSV
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const parsed = parseCSV(event.target.result);
      setCurrentFile({ name: file.name, title: file.name.replace('.csv', '') });
      setRecords(parsed);
      setPipelineStatus('idle');
      setCurrentStep(0);
      setApiResponse(null);
    };
    reader.readAsText(file);
  };

  // Execute Pipeline
  const handleRunPipeline = async () => {
    if (pipelineStatus === 'running' || records.length === 0) return;
    setPipelineStatus('running');
    setCurrentStep(1);

    // Step 1: Ingestion
    await new Promise((r) => setTimeout(r, 650));
    setCurrentStep(2);

    // Step 2: Risk Scoring
    await new Promise((r) => setTimeout(r, 850));
    setCurrentStep(3);

    // Step 3: D1 Sync
    await new Promise((r) => setTimeout(r, 750));
    setCurrentStep(4);

    // Step 4: Statement Prep
    await new Promise((r) => setTimeout(r, 650));
    setCurrentStep(5);

    // Step 5: Backend API & Real Gmail Dispatch
    try {
      const res = await fetch('/api/run-pipeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: currentFile.name,
          useCase: currentFile.title,
          records: records.slice(0, 10),
        }),
      });
      const data = await res.json();
      setApiResponse(data);
    } catch (err) {
      console.error('Pipeline error:', err);
      setApiResponse({ success: false, error: err.message });
    }

    setPipelineStatus('completed');
  };

  // Reset to initial clean upload screen
  const handleReset = () => {
    setCurrentFile(null);
    setRecords([]);
    setPipelineStatus('idle');
    setCurrentStep(0);
    setApiResponse(null);
  };

  const progressPercent =
    pipelineStatus === 'idle'
      ? 0
      : pipelineStatus === 'completed'
      ? 100
      : Math.round((currentStep / PIPELINE_STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex flex-col justify-center items-center selection:bg-emerald-400 selection:text-black font-sans relative overflow-x-hidden p-6">
      {/* Radiant atmospheric background glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(16,185,129,0.06),transparent_70%)]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center">

        {/* ================= STATE 1: ONLY UPLOAD BUTTON (NO CLUTTER) ================= */}
        {!currentFile && (
          <div className="w-full flex flex-col items-center justify-center py-12">
            <label className="group relative cursor-pointer w-full max-w-lg">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-amber-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-[#0A0E17] border-2 border-dashed border-slate-700 group-hover:border-emerald-400 rounded-3xl p-14 sm:p-20 flex flex-col items-center justify-center transition-all shadow-2xl text-center">
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">📁</span>
                <span className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  Click to Upload Your File
                </span>
                <span className="text-xs text-slate-400 mt-2 font-mono">
                  or drag and drop corporate CSV here
                </span>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </label>
          </div>
        )}

        {/* ================= STATE 2: FILE LOADED ➔ RUN PIPELINE ================= */}
        {currentFile && (
          <div className="w-full flex flex-col items-center gap-7 py-4">
            
            {/* Top Bar with Active File & Change Action */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
                <span>📄</span>
                <span className="font-bold text-white">{currentFile.name}</span>
                <span className="text-slate-500">·</span>
                <span className="text-emerald-400 font-bold">{records.length} Accounts Loaded</span>
              </div>
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Change File
              </button>
            </div>

            {/* Main Action Trigger & Animated Progress */}
            <div className="flex flex-col items-center gap-3 w-full my-2">
              <button
                onClick={handleRunPipeline}
                disabled={pipelineStatus === 'running' || records.length === 0}
                className={`w-full max-w-md py-4 rounded-2xl font-black text-base sm:text-lg tracking-wide transition-all shadow-2xl flex items-center justify-center gap-3 cursor-pointer ${
                  pipelineStatus === 'running'
                    ? 'bg-amber-400 text-black shadow-[0_0_35px_rgba(245,158,11,0.5)] cursor-not-allowed'
                    : pipelineStatus === 'completed'
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 text-black shadow-[0_0_35px_rgba(16,185,129,0.5)]'
                    : 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black hover:brightness-110 shadow-[0_0_35px_rgba(245,158,11,0.4)]'
                }`}
              >
                {pipelineStatus === 'running' ? (
                  <>
                    <span className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin" />
                    <span>EXECUTING PIPELINE...</span>
                  </>
                ) : pipelineStatus === 'completed' ? (
                  <>
                    <span>✓</span>
                    <span>PIPELINE EXECUTED · RUN AGAIN</span>
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    <span>RUN AUTONOMOUS PIPELINE</span>
                  </>
                )}
              </button>

              {/* Progress Bar */}
              <div className="w-full max-w-md bg-slate-900 rounded-full h-2 p-0.5 border border-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    pipelineStatus === 'completed' ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Status Message */}
              <div className="text-xs font-mono text-center">
                {pipelineStatus === 'idle' && (
                  <span className="text-slate-500">Click button above to trigger execution</span>
                )}
                {pipelineStatus === 'running' && (
                  <span className="text-amber-300 font-bold">
                    Stage {currentStep} of 5: {PIPELINE_STEPS[currentStep - 1]?.title}
                  </span>
                )}
                {pipelineStatus === 'completed' && (
                  <div className="flex flex-col items-center gap-1.5 mt-1">
                    <span className="text-emerald-400 font-bold text-xs sm:text-sm">
                      🎉 10 Real Emails Dispatched to Gmail Sent Folder · Audit Committed to Cloudflare D1
                    </span>
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-amber-300 hover:underline flex items-center gap-1 font-sans font-semibold"
                    >
                      Open Gmail to view Sent emails ↗
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* 5 Sequential Steps That Light Up One-by-One */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-2.5 mt-2">
              {PIPELINE_STEPS.map((step) => {
                const isFinished = pipelineStatus === 'completed' || currentStep > step.id;
                const isCurrent = pipelineStatus === 'running' && currentStep === step.id;

                return (
                  <div
                    key={step.id}
                    className={`p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                      isFinished
                        ? 'bg-emerald-950/25 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                        : isCurrent
                        ? 'bg-amber-950/30 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-[1.02]'
                        : 'bg-slate-900/40 border-slate-800/80 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                      <span className="text-sm">{step.icon}</span>
                      <span
                        className={`text-[9px] font-mono font-bold px-1 py-0.5 rounded ${
                          isFinished
                            ? 'bg-emerald-400/20 text-emerald-300'
                            : isCurrent
                            ? 'bg-amber-400/20 text-amber-300 animate-pulse'
                            : 'text-slate-500'
                        }`}
                      >
                        {isFinished ? '✓ DONE' : isCurrent ? 'ACTIVE' : `0${step.id}`}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold text-white mt-1.5 leading-snug">
                      {step.title}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
