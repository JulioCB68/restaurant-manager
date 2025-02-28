import Filter from "@/components/filter";
import InfoCard from "@/components/info-card";
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

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard status="available" quantity={7} />
          <InfoCard status="occupied" quantity={7} />
          <InfoCard status="reserved" quantity={7} />
        </div>
      </div>
    </div>
  );
}
