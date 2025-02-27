"use client";

import { LayoutDashboard, ListOrdered } from "lucide-react"; // Importação dos ícones
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Restaurant Dashboard", icon: LayoutDashboard },
    { href: "/orders", label: "Orders History", icon: ListOrdered },
  ];

  return (
    <>
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 pr-6 text-sm font-medium transition-colors ${
              isActive
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
      })}
    </>
  );
}
