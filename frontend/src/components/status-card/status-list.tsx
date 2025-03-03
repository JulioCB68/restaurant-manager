"use client";

import { useQuery } from "@tanstack/react-query";

import { getTables, ITableResponse } from "@/services/tables";

import StatusCard from "./status-card";

export default function StatusList() {
  const { data: tables } = useQuery<ITableResponse[]>({
    queryKey: ["get-all-tables"],
    queryFn: () => getTables(),
  });

  const AVAILABLE_TABLES = tables?.filter(
    (table) => table.status === "AVAILABLE",
  );

  const OCCUPIED_TABLES = tables?.filter(
    (table) => table.status === "OCCUPIED",
  );

  const RESERVED_TABLES = tables?.filter(
    (table) => table.status === "RESERVED",
  );
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatusCard status="AVAILABLE" quantity={AVAILABLE_TABLES?.length} />
      <StatusCard status="OCCUPIED" quantity={OCCUPIED_TABLES?.length} />
      <StatusCard status="RESERVED" quantity={RESERVED_TABLES?.length} />
    </div>
  );
}
