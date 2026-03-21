import { Info, Target, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="h-full w-full text-slate-800 font-sans selection:bg-blue-200 flex flex-col p-6 lg:p-10 gap-6">
      {/* Compact Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl p-8 flex-shrink-0 flex items-center justify-between shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Info className="w-3 h-3" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">PomodoroApp</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Main Content & Visão in a Grid to fit screen */}
      <section className="flex-1 grid lg:grid-cols-3 gap-6 min-h-0">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col gap-6 overflow-hidden">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Who We Are</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Phasellus tristique id orci id porttitor. Mauris tincidunt vehicula eros, eu mattis elit vehicula non.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-auto">
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-1">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Goals</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-slate-100">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-1">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Energy</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-slate-100">
              <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-1">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">Community</h3>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="lg:col-span-1 bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg flex flex-col justify-center">
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl"></div>
           <div className="relative z-10 text-center space-y-4">
             <h2 className="text-2xl font-bold">Our Vision</h2>
             <p className="text-sm text-blue-100 font-light leading-relaxed">
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
             </p>
           </div>
        </div>
      </section>
    </div>
  );
}
