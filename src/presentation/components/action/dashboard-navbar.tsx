"use client";

import { info } from "@/core/utils/data/app.info";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/infrastucture/state/auth";

const navigation = [
  { name: "Vipengele", path: "/#vipengele" },
  { name: "Sera ya Faragha", path: "/sera-ya-faragha" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DashboardNavbar: React.FC = () => {
  const router = useRouter();
  const { logoutUser } = useAuthStore();
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSignOut = async () => {
    await logoutUser();
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              onClick={() => handleSignOut()}
              className="text-gray-600 hover:text-gray-900"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
