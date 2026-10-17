export const wrap =
  "mx-auto w-[min(1160px,calc(100%-64px))] max-[950px]:w-[min(760px,calc(100%-42px))] max-[680px]:w-[calc(100%-36px)] max-[370px]:w-[calc(100%-28px)]";

export const section = "pt-[108px] max-[680px]:pt-[76px]";

export const sectionLabel =
  "flex items-center gap-[11px] font-mono text-[10px] tracking-[1.3px] text-[#737a91] light:text-[#6c7286]";

export const sectionTitle =
  "m-0 text-[clamp(34px,4vw,48px)] font-extrabold leading-[1.15] tracking-[-2px] max-[680px]:text-[35px] max-[680px]:tracking-[-1.4px]";

export const gradientText =
  "bg-[linear-gradient(105deg,#c0a7ff_0%,#8b6aff_46%,#6edbd6_120%)] bg-clip-text text-transparent";

export const headingRow =
  "mt-6 mb-[31px] flex items-end justify-between gap-5 max-[680px]:mt-[21px] max-[680px]:mb-[23px] max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-[17px]";

export const subtitle =
  "mt-3 mb-0 text-xs leading-[1.7] text-muted light:text-[#666b7f]";

export const headingAside =
  "flex items-center gap-[9px] pb-[5px] font-mono text-[9px] tracking-[1px] text-[#757d94] light:text-[#666b80]";

export const btnBase =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-[11px] rounded-[10px] px-[17px] text-xs font-bold transition duration-200 hover:-translate-y-0.5 max-[680px]:min-h-[42px] max-[680px]:px-[13px] max-[680px]:text-[11px] max-[370px]:w-full";

export const btnPrimary =
  `${btnBase} bg-[linear-gradient(115deg,#9b7aff,#7253e6)] text-white shadow-[0_7px_28px_#7956ec2c] hover:shadow-[0_8px_30px_#7956ec55]`;

export const btnSecondary =
  `${btnBase} border border-[#34384e] bg-[#0d1019] text-[#e0e1ed] hover:border-purple light:border-[#d8dbea] light:bg-white light:text-[#29283c]`;

export const btnGhost =
  `${btnBase} border border-[#34384e] bg-transparent text-[#e0e1ed] hover:border-purple light:border-[#d8dbea] light:text-[#29283c]`;

export const card =
  "rounded-[14px] border border-line bg-[linear-gradient(145deg,#111521,#0b0e17)] transition duration-200 hover:-translate-y-1 hover:border-[#484064] light:border-[#e0e3ee] light:bg-[linear-gradient(145deg,#fff,#f7f8fc)]";

export const tag =
  "rounded-md border border-[#2b2f43] bg-white/[0.01] px-2 py-1.5 text-[9px] text-[#a9aec2] light:border-[#e0e2ef] light:bg-[#f5f6fb] light:text-[#5c6178]";

export const wordmark =
  "whitespace-nowrap text-lg font-extrabold tracking-[-0.8px]";
