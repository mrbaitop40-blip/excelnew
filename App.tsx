import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, FORMULAS } from './data';
import { CategoryName } from './types';
import FormulaDetail from './components/FormulaDetail';
import * as Icons from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedFormulaId, setSelectedFormulaId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to true (Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Theme Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // -- Derived Data --
  const filteredFormulas = useMemo(() => {
    let result = FORMULAS;

    if (selectedCategory) {
      result = result.filter(f => f.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(f => 
        f.name.toLowerCase().includes(q) || 
        f.definition.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const currentFormula = useMemo(() => 
    FORMULAS.find(f => f.id === selectedFormulaId), 
  [selectedFormulaId]);

  // -- Handlers --
  const handleCategorySelect = (cat: CategoryName) => {
    setSelectedCategory(cat);
    setSelectedFormulaId(null); 
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setSelectedCategory(null);
    setSelectedFormulaId(null);
    setSearchQuery('');
  };

  const renderIcon = (iconName: string, className: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className={className} /> : <Icons.HelpCircle className={className} />;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-slate-900 dark:text-dark-text selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-200 transition-colors duration-300">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-slate-200 dark:border-dark-border p-4 flex items-center justify-between sticky top-0 z-30 shadow-sm dark:shadow-2xl transition-colors duration-300">
        <div className="flex items-center gap-3">
            <button onClick={handleHomeClick} className="font-bold text-xl flex items-center gap-2 tracking-tight text-slate-800 dark:text-white">
                <Icons.FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-teal-600 dark:from-white dark:to-slate-400">ExcelPedia</span>
            </button>
            <button 
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-emerald-100 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-emerald-400 transition-all"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Icons.Sun className="w-4 h-4" /> : <Icons.Moon className="w-4 h-4" />}
            </button>
        </div>
      </div>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-80 bg-white/80 dark:bg-dark-surface/50 backdrop-blur-xl border-r border-slate-200 dark:border-dark-border h-screen sticky top-0 z-20 transition-colors duration-300">
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between mb-2">
              <button onClick={handleHomeClick} className="group flex items-center gap-3 font-bold text-2xl tracking-tighter transition-opacity hover:opacity-80 text-emerald-950 dark:text-white">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-emerald-800 rounded-lg shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50 text-white border border-transparent dark:border-emerald-500/20 group-hover:shadow-emerald-300 dark:group-hover:shadow-emerald-500/20 transition-all">
                    <Icons.FileSpreadsheet className="w-6 h-6" />
                </div>
                ExcelPedia
              </button>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-sm dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400 border border-transparent dark:border-slate-700 transition-all"
                title={isDarkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
              >
                 {isDarkMode ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
              </button>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium tracking-wider pl-1 uppercase">Ensiklopedia Rumus</p>
        </div>

        <div className="px-6 py-4 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
            {/* Search Box */}
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icons.Search className="h-4 w-4 text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-500 dark:group-focus-within:text-emerald-400 transition-colors" />
                </div>
                <input 
                    type="text" 
                    placeholder="Cari rumus..." 
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-dark-border rounded-xl leading-5 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 dark:focus:ring-1 focus:ring-emerald-500/20 dark:focus:ring-emerald-500/50 focus:border-emerald-500 dark:focus:border-emerald-500/50 transition-all duration-200 sm:text-sm shadow-sm dark:shadow-inner"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if(e.target.value) {
                             setSelectedCategory(null);
                             setSelectedFormulaId(null);
                        }
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
                <h3 className="px-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Kategori</h3>
                {CATEGORIES.map(cat => {
                    const isActive = selectedCategory === cat.name;
                    return (
                        <button
                            key={cat.name}
                            onClick={() => handleCategorySelect(cat.name)}
                            className={`group w-full flex items-center gap-3.5 px-3.5 py-3 text-sm font-medium rounded-xl transition-all duration-300 ease-out border ${
                                isActive 
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-500/10 dark:to-emerald-500/5 dark:bg-emerald-500/10 text-white dark:text-emerald-300 shadow-md shadow-emerald-200 dark:shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)] border-transparent dark:border-emerald-500/20 translate-x-1' 
                                : 'bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-emerald-700 dark:hover:text-slate-200'
                            }`}
                        >
                            <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {renderIcon(cat.icon, `w-4 h-4 ${isActive ? 'text-emerald-100 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400'}`)}
                            </span>
                            {cat.name}
                            {isActive && <Icons.ChevronRight className="w-4 h-4 ml-auto text-emerald-100 dark:text-emerald-400 opacity-80" />}
                        </button>
                    )
                })}
            </nav>
        </div>
        
        <div className="p-6 border-t border-slate-100 dark:border-dark-border bg-white/50 dark:bg-dark-surface/30 backdrop-blur-sm transition-colors duration-300">
             <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400/80 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                 <span>Mode Offline Aktif</span>
             </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:px-12 overflow-y-auto min-h-screen">
        
        {/* Mobile Nav Scroller */}
        <div className="md:hidden mb-6 -mx-4 px-4 overflow-x-auto pb-4 pt-2 flex gap-3 no-scrollbar snap-x">
             {CATEGORIES.map(cat => (
                <button
                    key={cat.name}
                    onClick={() => handleCategorySelect(cat.name)}
                    className={`snap-start flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium border shadow-sm transition-all ${
                        selectedCategory === cat.name
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200 dark:shadow-emerald-900/50'
                        : 'bg-white dark:bg-dark-surface text-slate-600 dark:text-slate-400 border-slate-200 dark:border-dark-border'
                    }`}
                >
                    {cat.name}
                </button>
            ))}
        </div>

        {/* Mobile Search */}
        <div className="md:hidden relative mb-6 group">
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-500 dark:group-focus-within:text-emerald-400" />
            <input 
                type="text" 
                placeholder="Cari rumus excel..." 
                className="w-full pl-11 pr-4 py-3 text-sm border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface rounded-2xl shadow-sm focus:outline-none focus:ring-2 dark:focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-slate-200 transition-colors"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if(e.target.value) {
                         setSelectedCategory(null);
                         setSelectedFormulaId(null);
                    }
                }}
            />
        </div>

        {/* Content Views */}
        {currentFormula ? (
            <div className="max-w-4xl mx-auto animate-in slide-in-from-right-4 duration-500">
                <button 
                    onClick={() => setSelectedFormulaId(null)}
                    className="group mb-6 flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors px-1"
                >
                    <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/50 border border-transparent dark:border-slate-700 group-hover:border-emerald-100 dark:group-hover:border-emerald-500/30 mr-2 transition-all">
                        <Icons.ArrowLeft className="w-4 h-4" />
                    </div>
                    Kembali ke daftar
                </button>
                <FormulaDetail formula={currentFormula} />
            </div>
        ) : (
            <div className="max-w-6xl mx-auto animate-in fade-in duration-700">
                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-600 dark:from-emerald-200 dark:via-emerald-400 dark:to-teal-400 mb-3 tracking-tight drop-shadow-sm transition-all duration-300">
                        {selectedCategory ? selectedCategory : (searchQuery ? `Hasil: "${searchQuery}"` : "Jelajahi Rumus")}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed transition-colors duration-300">
                        {selectedCategory 
                            ? CATEGORIES.find(c => c.name === selectedCategory)?.description 
                            : "Temukan solusi untuk spreadsheet Anda. Pilih kategori atau mulai pencarian."}
                    </p>
                </div>

                {filteredFormulas.length === 0 ? (
                     <div className="flex flex-col items-center justify-center py-24 bg-white/60 dark:bg-dark-surface/30 backdrop-blur-sm rounded-3xl border border-dashed border-slate-300 dark:border-dark-border transition-colors duration-300">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-full mb-4 border border-slate-100 dark:border-dark-border">
                            <Icons.SearchX className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-1">Tidak ditemukan</h3>
                        <p className="text-slate-500 dark:text-slate-500">Coba kata kunci lain atau kategori berbeda.</p>
                     </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {filteredFormulas.map((formula, idx) => (
                            <button
                                key={formula.id}
                                onClick={() => setSelectedFormulaId(formula.id)}
                                className="group relative flex flex-col items-start text-left bg-white dark:bg-dark-surface/40 hover:bg-white dark:hover:bg-dark-surface/80 p-6 rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/20 border border-slate-100/80 dark:border-dark-border hover:border-emerald-200/50 dark:hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {/* Glow/Gradient Top Border for respective themes */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block dark:hidden"></div>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500 hidden dark:block"></div>
                                
                                <div className="relative flex w-full justify-between items-start mb-3 z-10">
                                    <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-transparent dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 p-2 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:border-transparent dark:group-hover:border-emerald-400/30 transition-colors">
                                        <span className="font-mono font-bold text-lg tracking-tight">
                                            {formula.name}
                                        </span>
                                    </div>
                                    {!selectedCategory && (
                                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-800">
                                            {formula.category.split(' ')[0]}
                                        </span>
                                    )}
                                </div>
                                
                                <p className="relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 z-10">
                                    {formula.definition}
                                </p>
                                
                                <div className="relative mt-auto w-full pt-4 border-t border-slate-50 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-500/80 opacity-80 group-hover:opacity-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-all z-10">
                                    <span>Lihat Penggunaan</span>
                                    <div className="bg-emerald-50 dark:bg-emerald-950 p-1 rounded-full group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 group-hover:translate-x-1 transition-all border border-transparent dark:border-emerald-500/10 dark:group-hover:border-emerald-500/30">
                                        <Icons.ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )}
      </main>
    </div>
  );
};

export default App;