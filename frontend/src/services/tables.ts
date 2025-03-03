import { api } from "@/lib/axios";

type TableStatus = "available" | "occupied" | "reserved";

export interface ITableResponse {
  id?: number;
  number: number;
  status: TableStatus;
  seats: number;
}

export async function getTables(): Promise<ITableResponse[]> {
  const response = await api.get("/tables");

  return response.data;
}
