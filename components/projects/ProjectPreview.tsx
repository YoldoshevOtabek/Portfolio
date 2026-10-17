import type { ProjectKind } from "@/data/projects";
import Image from "next/image"

type Props = {
  kind: ProjectKind;
};

const themes = {
  shop: {
    brand: "B",
    title: "Shop dashboard",
    accent: "bg-[#7659e8]",
    bar: "bg-[linear-gradient(to_top,#7960e7,#b7a8ff)]",
    stats: [
      ["Total users", "1,284"],
      ["Orders", "356"],
      ["Products", "92"],
    ],
  },
  education: {
    brand: "E",
    title: "Education dashboard",
    accent: "bg-[#1697a5]",
    bar: "bg-[linear-gradient(to_top,#2c9eaa,#8ce1d6)]",
    stats: [
      ["Total users", "248"],
      ["Groups", "18"],
      ["Courses", "12"],
    ],
  },
  users: {
    brand: "S",
    title: "Storefront",
    accent: "bg-[#3b82f6]",
    bar: "bg-[linear-gradient(to_top,#2563eb,#93c5fd)]",
    stats: [
      ["Products", "240"],
      ["Categories", "18"],
      ["Brands", "24"],
    ],
  },
} as const;

export default function ProjectPreview({ kind }: Props) {
  const theme = themes[kind];

  return (
    <div
      className="relative mt-[22px] flex h-[215px] w-full origin-bottom overflow-hidden rounded-t-lg border border-[#cdd2e3] bg-[#f5f6fb] shadow-[0_15px_45px_#0005] [transform:perspective(1000px)_rotateX(2deg)] max-[950px]:h-[190px] max-[680px]:mt-5 max-[680px]:h-[197px] max-[370px]:h-[167px]"
      aria-label={`${kind} application preview`}
    >
      {kind === "users" || kind === "shop" ? (
        <Image
        src={kind === "users" ? "/bizdaUsers.png" : "/BizdaCrm.png"}
        alt={
          kind === "users"
            ? "Bizda Users storefront preview"
            : "Bizda CRM dashboard preview"
        }
          fill
          className="object-cover object-top"
          sizes="(max-width: 680px) 100vw, 50vw"
        />
      ) 
     : (
        <>
      <aside className="flex w-[21%] shrink-0 flex-col gap-[11px] border-r border-[#e7e9f1] bg-white px-[9px] py-[13px]">
        <div className="mb-2 flex items-center gap-[5px]">
          <span
            className={`grid size-[17px] place-items-center rounded text-[11px] text-white ${theme.accent}`}
          >
            {theme.brand}
          </span>
          <i className="block h-1 w-[34px] rounded-[5px] bg-[#cfd3df]" />
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <span
            key={index}
            className={`h-[5px] rounded-[3px] ${
              index === 1
                ? "w-[90%] bg-[#b3a1ff]"
                : index === 4
                  ? "w-[48%] bg-[#e2e5ee]"
                  : "w-[78%] bg-[#e2e5ee]"
            }`}
          />
        ))}
      </aside>

      <div className="min-w-0 flex-1 px-[13px] pt-[13px] pb-2.5">
        <div className="flex items-center justify-between">
          <div>
            <small className="block text-[5px] tracking-[0.7px] text-[#9aa1b3]">
              ADMINISTRATION / OVERVIEW
            </small>
            <b className="mt-[5px] block text-[11px] text-[#20253a]">{theme.title}</b>
          </div>
          <span className="grid size-[22px] place-items-center rounded-full bg-[#e4dcff] text-[7px] font-extrabold text-[#7659e8]">
            OY
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {theme.stats.map(([label, value]) => (
            <div
              key={label}
              className="min-w-0 rounded-[5px] border border-[#e7e9f1] bg-white px-1.5 py-[7px]"
            >
              <i className={`mb-[5px] block h-[3px] w-[13px] rounded ${theme.bar}`} />
              <small className="block text-[5px] whitespace-nowrap text-[#858ca0]">
                {label}
              </small>
              <b className="my-1 block text-[11px] text-[#252941]">{value}</b>
              <em className="text-[5px] not-italic text-[#39a77b]">+12.8%</em>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-[5px] border border-[#e7e9f1] bg-white px-[9px] pt-2 pb-1.5">
          <div className="flex justify-between text-[6px] text-[#858ca0]">
            <b className="text-[7px] text-[#2d3248]">Activity overview</b>
            <span>Last 7 days</span>
          </div>
          <div className="mt-2 flex h-[54px] items-end gap-1 border-b border-[#e8eaf2] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_17px,#eef0f6_18px)]">
            {[34, 57, 43, 76, 51, 88, 62, 95, 48, 70, 83, 60].map((height, index) => (
              <i
                key={index}
                className={`block min-w-[2px] flex-1 rounded-t-sm opacity-85 ${theme.bar}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex gap-[5px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-2 flex-1 rounded-sm bg-[#e4e7f0]" />
          ))}
        </div>
      </div>
        </>
      )}
    </div>
  );
}
