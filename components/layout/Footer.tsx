import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { wrap, wordmark } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <Reveal>
    <footer
      className={`${wrap} flex h-[90px] items-center justify-between gap-5 max-[680px]:grid max-[680px]:h-auto max-[680px]:min-h-[105px] max-[680px]:grid-cols-[1fr_auto] max-[680px]:gap-[7px] max-[680px]:py-[22px]`}
    >
      <Link href="#home" className={`${wordmark} text-[15px]`}>
        Otabek<span className="text-purple">.</span>
        <i className="not-italic text-cyan">dev</i>
      </Link>

      <p className="m-0 text-[9px] text-[#747b91] max-[680px]:col-start-1 max-[680px]:row-start-2">
        © 2026 Barcha huquqlar himoyalangan
      </p>

      

      <a
        href="#home"
        className="flex items-center gap-[7px] font-mono text-[8px] tracking-[1px] text-[#9a9fb2] max-[680px]:col-start-2 max-[680px]:row-span-2 max-[680px]:row-start-1"
      >
        YUQORIGA
        <ArrowUp size={14} />
      </a>
    </footer>
    </Reveal>
  );
}
