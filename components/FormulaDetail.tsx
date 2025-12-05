import React from 'react';
import { FormulaData } from '../types';
import { Lightbulb, Table, Terminal, Activity, ArrowRight } from 'lucide-react';

interface FormulaDetailProps {
  formula: FormulaData;
}

const FormulaDetail: React.FC<FormulaDetailProps> = ({ formula }) => {
  return (
    <div className="bg-white dark:bg-dark-surface/60 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-2xl dark:shadow-black/40 border border-slate-100 dark:border-dark-border overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors duration-300">
      
      {/* Header with Adaptive Gradient */}
      <div className="relative bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 dark:from-emerald-950 dark:via-emerald-900 dark:to-slate-900 px-8 py-10 text-white overflow-hidden border-b border-transparent dark:border-white/5 transition-colors duration-500">
        {/* Decorative Light Effects */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 md:-mr-20 md:-mt-20 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 dark:bg-emerald-500/10 blur-3xl dark:blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-teal-400/20 dark:bg-teal-500/10 blur-2xl dark:blur-[60px]"></div>

        <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-emerald-50 dark:text-emerald-200 tracking-wide uppercase shadow-sm">
                            {formula.category}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-white drop-shadow-sm dark:drop-shadow-md mb-4 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:to-slate-300">
                        {formula.name}
                    </h2>
                    <p className="text-lg md:text-xl text-emerald-50/90 dark:text-slate-300 font-light leading-relaxed max-w-2xl">
                        {formula.definition}
                    </p>
                </div>
                <div className="hidden md:block p-3 bg-white/10 dark:bg-white/5 rounded-2xl backdrop-blur-sm dark:backdrop-blur-md border border-white/10 shadow-inner">
                    <Activity className="w-8 h-8 text-emerald-100 dark:text-emerald-400" />
                </div>
            </div>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-10">
        
        {/* Syntax Section */}
        <section>
          <h3 className="flex items-center text-slate-800 dark:text-slate-200 font-bold text-lg mb-4 transition-colors">
            <div className="p-1.5 bg-indigo-50 dark:bg-indigo-500/10 border border-transparent dark:border-indigo-500/20 rounded-lg mr-3 text-indigo-600 dark:text-indigo-400 transition-colors">
                <Terminal className="w-5 h-5" />
            </div>
            Sintaks Rumus
          </h3>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500/50 dark:to-purple-500/50 rounded-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 blur"></div>
            <div className="relative bg-slate-900 dark:bg-black/50 backdrop-blur-sm text-emerald-300 p-5 rounded-xl font-mono text-sm md:text-base shadow-2xl dark:shadow-xl overflow-x-auto border border-slate-800 dark:border-white/10 flex items-center justify-between">
                <code>{formula.syntax}</code>
            </div>
          </div>
        </section>

        {/* Parameters Grid */}
        <section>
          <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-4 transition-colors">Penjelasan Parameter</h3>
          <div className="grid grid-cols-1 gap-3">
            {formula.parameters.map((param, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-3 p-4 bg-slate-50/80 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-md hover:border-emerald-100 dark:hover:border-emerald-500/30 transition-all duration-200">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-950/50 px-2 py-1 rounded-md text-sm whitespace-nowrap border border-emerald-200/50 dark:border-emerald-500/20 transition-colors">
                  {param.name}
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base transition-colors">
                  {param.description}
                </span>
              </div>
            ))}
            {formula.parameters.length === 0 && (
              <div className="text-slate-400 dark:text-slate-500 italic text-sm p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 transition-colors">Tidak ada parameter khusus.</div>
            )}
          </div>
        </section>

        {/* Example Section */}
        <div className="bg-slate-50/50 dark:bg-black/20 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-white/5 transition-colors">
            <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-2 transition-colors">Studi Kasus</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed transition-colors">
                {formula.exampleScenario}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Visual Table */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
                    <div className="bg-slate-100/50 dark:bg-slate-800/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 transition-colors">
                        <Table className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tabel Excel</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-slate-50 dark:bg-slate-800 w-8 text-center text-slate-400 dark:text-slate-500 font-normal border-b border-r border-slate-200 dark:border-slate-700 transition-colors"></th>
                                    {formula.exampleTable[0].map((header, i) => (
                                        <th key={i} className="bg-slate-50 dark:bg-slate-800 px-4 py-3 text-center text-slate-600 dark:text-slate-300 font-bold border-b border-r border-slate-200 dark:border-slate-700 min-w-[80px] transition-colors">
                                            {String.fromCharCode(65 + i)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {formula.exampleTable.map((row, rIdx) => {
                                    if (rIdx === 0 && row.every(cell => cell.length <= 1 && cell.match(/[A-Z]/))) return null; 
                                    return (
                                    <tr key={rIdx} className="hover:bg-blue-50/30 dark:hover:bg-emerald-900/10 transition-colors">
                                        <td className="bg-slate-50 dark:bg-slate-800 text-center text-slate-400 dark:text-slate-500 font-normal border-r border-b border-slate-200 dark:border-slate-700 py-2 transition-colors">
                                            {rIdx + 1}
                                        </td>
                                        {row.map((cell, cIdx) => (
                                            <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300 border-r border-b border-slate-200/60 dark:border-slate-700/60 font-medium transition-colors">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Logic & Result */}
                <div className="flex flex-col gap-5">
                    <div className="bg-white dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-sm hover:shadow-md dark:hover:shadow-md dark:hover:border-slate-700 transition-all">
                        <div className="flex items-center justify-between mb-3">
                             <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">Rumus</h4>
                        </div>
                        <div className="bg-slate-50 dark:bg-black/40 border border-slate-200/60 dark:border-slate-800 p-4 rounded-lg font-mono text-sm text-emerald-700 dark:text-emerald-400 break-all shadow-inner dark:shadow-inner transition-colors">
                            {formula.exampleCode}
                        </div>
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-slate-900/50 p-5 rounded-xl border border-emerald-100 dark:border-emerald-500/10 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden transition-colors">
                         <div className="absolute inset-0 bg-emerald-500/5 blur-xl hidden dark:block"></div>
                         <h4 className="relative text-xs font-bold text-emerald-600/60 dark:text-emerald-500/70 uppercase tracking-widest mb-3 transition-colors">Hasil Output</h4>
                        <div className="relative flex items-center gap-3">
                            <span className="font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-300 tracking-tight dark:drop-shadow-[0_0_10px_rgba(52,211,153,0.3)] transition-colors">
                                {formula.expectedResult}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Pro Tips */}
        {formula.tips.length > 0 && (
            <section className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-500/10 rounded-2xl p-6 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 dark:bg-amber-500/10 rounded-full blur-2xl dark:blur-3xl -mr-10 -mt-10 pointer-events-none transition-colors"></div>
                <h3 className="flex items-center text-amber-800 dark:text-amber-400 font-bold text-lg mb-4 relative z-10 transition-colors">
                    <Lightbulb className="w-5 h-5 mr-2 text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-500/20" />
                    Tips & Trik
                </h3>
                <ul className="space-y-3 relative z-10">
                    {formula.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-amber-900/80 dark:text-amber-100/70 text-sm md:text-base leading-relaxed transition-colors">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 flex-shrink-0 dark:shadow-[0_0_5px_#f59e0b] transition-colors"></span>
                        {tip}
                    </li>
                    ))}
                </ul>
            </section>
        )}

      </div>
    </div>
  );
};

export default FormulaDetail;