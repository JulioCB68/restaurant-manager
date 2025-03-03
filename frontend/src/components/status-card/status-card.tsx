import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { formatStatus, statusColors } from "../helpers";

type TableStatus = "AVAILABLE" | "OCCUPIED" | "RESERVED" | "UNAVAILABLE";

interface IInfoCardProps {
  status: TableStatus;
  quantity: number | undefined;
}

export default function StatusCard({ status, quantity }: IInfoCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          {formatStatus(status)} Tables
        </CardTitle>
        <div className={`size-4 rounded-full ${statusColors[status]}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{quantity}</div>
      </CardContent>
    </Card>
  );
}
