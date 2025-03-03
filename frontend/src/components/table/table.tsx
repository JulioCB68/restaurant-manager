import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TableStatus = "available" | "occupied" | "reserved";

export interface ITableProps {
  id?: number;
  number: number;
  status: TableStatus;
  seats: number;
}

export default function Table({ number, seats, status }: ITableProps) {
  const getStatusColor = (status: TableStatus) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "occupied":
        return "bg-red-500";
      case "reserved":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Table {number}</CardTitle>
          <div className={`size-4 rounded-full ${getStatusColor(status)}`} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="size-4" />
            <span className="text-sm">{seats} seats</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`text-sm capitalize ${
                status === "available"
                  ? "text-green-500"
                  : status === "occupied"
                    ? "text-red-500"
                    : "text-yellow-500"
              }`}
            >
              {status}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
