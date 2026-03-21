import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

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
    <div className="py-10 mx-20 text-center">
      <CompactTable columns={COLUMNS} data={{ nodes: items }} theme={theme} />
    </div>
  );
}
