import { Search } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Filter() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
          <Input placeholder="Search table number..." className="pl-8" />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Status Filter</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="space-y-4">
              <h4 className="leading-none font-medium">Filter by Status</h4>
              <div className="space-y-2">
                {["available", "occupied", "reserved"].map((status) => (
                  <div key={status} className="flex items-center space-x-2">
                    <Checkbox id={status} />
                    <label
                      htmlFor={status}
                      className="text-sm leading-none font-medium capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {status}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Capacity Filter</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="space-y-4">
              <h4 className="leading-none font-medium">Seats Range</h4>
              <div className="space-y-4">
                <Slider min={1} max={8} step={2} />
                <div className="flex items-center justify-between text-sm">
                  <span>1 seats</span>
                  <span>8 seats</span>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
