"use client";

import { AppLink, links } from "@/utils/data/app-links";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";

export default function Download() {
  return (
    <div
      id="pakua"
      className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center text-center lg:py-8">
        <h1 className="text-3xl font-bold text-primary p-2 px-5 rounded-md md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          {info.callout} Leo
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 rounded-md">
          {info.tagline}
        </h3>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {links
            .filter((link) => link.type === "mobile")
            .map((link: AppLink) => (
              <div
                key={link.id}
                className="flex flex-col items-center text-center gap-x-8 px-3 py-5"
              >
                <Image
                  src={`/icons/${link.os.toLowerCase()}.png`}
                  alt={link.os}
                  width={100}
                  height={120}
                  className="w-[100px] h-[120px] object-cover"
                />

                <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 text-xl rounded-md">
                  {link.title}
                </h3>
                <Link
                  className="rounded-xl flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm"
                  href={link.url}
                  role="button"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">PAKUA</span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
