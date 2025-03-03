import Filter from "@/components/filter";
import InfoCard from "@/components/info-card";
import Table, { ITableProps } from "@/components/table";
import { Button } from "@/components/ui/button";

const initialTables: ITableProps[] = [
  { id: 1, number: 1, seats: 2, status: "available" },
  { id: 2, number: 2, seats: 4, status: "occupied" },
  { id: 3, number: 3, seats: 4, status: "reserved" },
  { id: 4, number: 4, seats: 6, status: "available" },
  { id: 5, number: 5, seats: 2, status: "available" },
  { id: 6, number: 6, seats: 4, status: "occupied" },
  { id: 7, number: 7, seats: 8, status: "reserved" },
  { id: 8, number: 8, seats: 2, status: "available" },
  { id: 9, number: 9, seats: 4, status: "available" },
  { id: 10, number: 10, seats: 6, status: "occupied" },
  { id: 11, number: 11, seats: 2, status: "available" },
  { id: 12, number: 12, seats: 4, status: "available" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
          <Button variant="outline">Reset Filters</Button>
        </div>

        <Filter />

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard status="available" quantity={7} />
          <InfoCard status="occupied" quantity={7} />
          <InfoCard status="reserved" quantity={7} />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {initialTables.map((item) => (
            <Table
              number={item.number}
              seats={item.seats}
              status={item.status}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
