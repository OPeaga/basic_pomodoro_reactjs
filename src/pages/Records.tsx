import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { History, Clock, Activity } from "lucide-react";

import type { PomodoroRecord } from "../types";

export function Records() {
  const theme = useTheme(getTheme());
  const items = JSON.parse(
    localStorage.getItem("1") || "[]",
  ) as PomodoroRecord[];

  const COLUMNS = [
    { label: "Id", renderCell: (item: PomodoroRecord) => item.id },
    {
      label: "Data",
      renderCell: (item: PomodoroRecord) => {
        const dataFormatada = new Date(item.data);
        return dataFormatada.toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  ];

  return (
    <div className="h-full w-full py-6 px-6 sm:px-10 lg:px-16 font-sans selection:bg-blue-200 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-6 h-full max-h-[850px]">
        
        {/* Header Section */}
        <div className="text-center shrink-0">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-3 shadow-sm">
            <History className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Session <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Records</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Acompanhe o seu histórico de sessões Pomodoro e avalie o seu progresso diário.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
           <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 relative overflow-hidden">
             <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-50 to-transparent"></div>
             <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
               <Clock className="w-6 h-6 text-blue-500" />
             </div>
             <div className="relative z-10">
               <p className="text-xs font-medium text-slate-500 mb-0.5">Sessões Totais</p>
               <p className="text-2xl font-bold text-slate-900">{items.length}</p>
             </div>
           </div>

           <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 text-white shadow-md flex items-center gap-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
               <Activity className="w-6 h-6 text-blue-300" />
             </div>
             <div className="relative z-10">
               <p className="text-xs font-medium text-blue-200 mb-0.5">Status</p>
               <p className="text-lg font-semibold text-white">
                 {items.length > 0 ? "Ativo" : "Iniciando"}
               </p>
             </div>
           </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex-1 flex flex-col min-h-0 relative">
          <div className="flex items-center justify-between mb-4 shrink-0">
             <h2 className="text-lg font-bold text-slate-900">Histórico Recente</h2>
             {items.length > 0 && (
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium border border-green-100">
                  + {items.length} Registros
                </span>
             )}
          </div>
          
          <div className="flex-1 overflow-y-auto rounded-xl border border-slate-100 shadow-sm custom-scrollbar bg-slate-50/30">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3">
                <History className="w-10 h-10 opacity-50" />
                <p className="text-base font-medium text-slate-500">Nenhum registro encontrado ainda.</p>
                <p className="text-xs">Complete sua primeira sessão para ver seu histórico aqui!</p>
              </div>
            ) : (
              <div className="w-full text-left [&_.table]:!w-full [&_.table]:bg-white">
                <CompactTable columns={COLUMNS} data={{ nodes: items }} theme={theme} />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
