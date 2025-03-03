"use client";

import { useQuery } from "@tanstack/react-query";

import { getTables, ITableResponse } from "@/services/tables";

import Table from "./table";

export default function TablesList() {
  const { data: tables } = useQuery<ITableResponse[]>({
    queryKey: ["get-all-tables"],
    queryFn: () => getTables(),
  });
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {tables?.map((item) => (
        <Table
          number={item.number}
          seats={item.seats}
          status={item.status}
          key={item.id}
        />
      ))}
    </div>
  );
}
