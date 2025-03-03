import StatusList from "@/components/status-card/status-list";
import Filter from "@/components/table/filter";
import TablesList from "@/components/table/tables-list";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
          <Button variant="outline">Reset Filters</Button>
        </div>

        <Filter />

        <StatusList />

        <TablesList />
      </div>
    </div>
  );
}
