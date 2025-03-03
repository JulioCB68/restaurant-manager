import { api } from "@/lib/axios";

type TableStatus = "AVAILABLE" | "OCCUPIED" | "RESERVED" | "UNAVAILABLE";

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
