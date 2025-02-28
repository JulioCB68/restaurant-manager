"use client";

import InfoCard from "@/components/info-card";

// Types
type TableStatus = "available" | "occupied" | "reserved";

interface Table {
  id: number;
  number: number;
  seats: number;
  status: TableStatus;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface OrderItem {
  productId: number;
  quantity: number;
  product: Product;
}

interface Order {
  tableId: number;
  items: OrderItem[];
  timestamp: Date;
}

// Menu data
const menuItems: Product[] = [
  { id: 1, name: "X-Burger", price: 25.9, category: "Burgers" },
  { id: 2, name: "Margherita Pizza", price: 45.9, category: "Pizzas" },
  { id: 3, name: "Caesar Salad", price: 28.9, category: "Salads" },
  { id: 4, name: "French Fries", price: 12.9, category: "Sides" },
  { id: 5, name: "Coca-Cola", price: 7.9, category: "Drinks" },
  { id: 6, name: "Chicken Wings", price: 32.9, category: "Appetizers" },
  { id: 7, name: "Spaghetti", price: 38.9, category: "Pasta" },
  { id: 8, name: "Water", price: 4.9, category: "Drinks" },
  { id: 9, name: "Ice Cream", price: 15.9, category: "Desserts" },
  { id: 10, name: "Coffee", price: 6.9, category: "Drinks" },
];

// Initial table data
const initialTables: Table[] = [
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

interface Filters {
  search: string;
  status: TableStatus[];
  minSeats: number;
  maxSeats: number;
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
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
