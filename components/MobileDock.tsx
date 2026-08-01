"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileDock() {
  const pathname = usePathname();
  const isMenu = pathname === "/menu";

  return (
    <div className="dock">
      {isMenu ? (
        <>
          <a className="btn btn-red btn-sm" href="tel:+13863339786">
            Call To Order
          </a>
          <Link className="btn btn-ghost btn-sm" href="/#contact">
            Directions
          </Link>
        </>
      ) : (
        <>
          <Link className="btn btn-red btn-sm" href="/menu">
            View Menu
          </Link>
          <a className="btn btn-ghost btn-sm" href="tel:+13863339786">
            Call
          </a>
        </>
      )}
    </div>
  );
}
