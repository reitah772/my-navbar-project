"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Min Sida</h1>
      <ul className="flex gap-6">
        {[
          { name: "Hem", path: "/" },
          { name: "Om oss", path: "/about" },
          { name: "Kontakt", path: "/contact" },
        ].map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={clsx(
                "hover:underline",
                pathname === path && "underline font-bold"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
