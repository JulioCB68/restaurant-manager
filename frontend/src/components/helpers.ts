type TableStatus = "AVAILABLE" | "OCCUPIED" | "RESERVED" | "UNAVAILABLE";

export const statusColors: Record<TableStatus, string> = {
  AVAILABLE: "bg-green-500",
  OCCUPIED: "bg-red-500",
  RESERVED: "bg-yellow-500",
  UNAVAILABLE: "bg-gray-500",
};

export const statusColorsText: Record<TableStatus, string> = {
  AVAILABLE: "text-green-500",
  OCCUPIED: "text-red-500",
  RESERVED: "text-yellow-500",
  UNAVAILABLE: "text-gray-500",
};

export const formatStatus = (status: TableStatus) =>
  status.charAt(0) + status.slice(1).toLowerCase();
