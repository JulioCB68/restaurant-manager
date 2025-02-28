import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TableStatus = "available" | "occupied" | "reserved";

interface IInfoCardProps {
  status: TableStatus;
  quantity: number;
}

export default function InfoCard({ status, quantity }: IInfoCardProps) {
  const statusColors = {
    available: "bg-green-500",
    occupied: "bg-red-500",
    reserved: "bg-yellow-500",
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium capitalize">
          {status} Tables
        </CardTitle>
        <div className={`size-4 rounded-full ${statusColors[status]}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{quantity}</div>
      </CardContent>
    </Card>
  );
}
