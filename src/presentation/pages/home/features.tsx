"use client";

import { Feature, features } from "@/core/utils/data/features";
import { RiApps2AiFill } from "react-icons/ri";
import GlowCard from "@/presentation/components/general/glow.card";

export default function Features() {

  return (
    <section id="vipengele">
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature: Feature) => (
            <GlowCard key={feature.id} identifier={`kipengele-${feature.id}`}>
              <div className="p-3 relative">
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-red-500 transition-all duration-300 hover:scale-125">
                    <RiApps2AiFill size={36} color="#1E88E5" />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {feature.title}
                    </p>
                    <p className="text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
