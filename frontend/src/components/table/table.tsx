import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { formatStatus, statusColors, statusColorsText } from "../helpers";

type TableStatus = "AVAILABLE" | "OCCUPIED" | "RESERVED" | "UNAVAILABLE";

export interface ITableProps {
  id?: number;
  number: number;
  status: TableStatus;
  seats: number;
}

export default function Table({ number, seats, status }: ITableProps) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Table {number}</CardTitle>
          <div className={`size-4 rounded-full ${statusColors[status]}`} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="size-4" />
            <span className="text-sm">{seats} seats</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`text-sm capitalize ${statusColorsText[status]}`}>
              {formatStatus(status)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
