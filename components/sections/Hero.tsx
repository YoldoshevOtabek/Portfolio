import Link from "next/link";
import { ArrowDown, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  wrap,
  gradientText,
  btnPrimary,
  btnSecondary,
} from "@/components/ui/primitives";

export default function Hero() {
  return (
    <section
      className={`${wrap} relative grid min-h-[620px] grid-cols-[1.03fr_0.97fr] items-center pt-[30px] pb-[72px] max-[950px]:min-h-[590px] max-[950px]:grid-cols-[1fr_0.88fr] max-[680px]:flex max-[680px]:min-h-0 max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:pt-11 max-[680px]:pb-16`}
      id="home"
    >
      <div className="relative z-[2] py-[35px] max-[680px]:p-0">
        <div className="motion-rise flex items-center gap-[9px] font-mono text-[10px] tracking-[1.1px] text-[#b9b4d8]">
          <span className="motion-pulse inline-block size-[7px] rounded-full bg-green shadow-[0_0_13px_#81e6b080]" />
          JUNIOR FRONTEND DEVELOPER
        </div>

        <p
          className="motion-rise mt-[35px] mb-0 text-[19px] text-[#c6c5d7] max-[680px]:mt-[30px] max-[680px]:text-[17px] light:text-[#5f6378]"
          style={{ animationDelay: "70ms" }}
        >
          Salom, men
        </p>

        <h1
          className="motion-rise my-[5px] mb-5 text-[clamp(54px,6.2vw,82px)] leading-[0.99] font-extrabold tracking-[-5px] max-[950px]:text-[62px] max-[680px]:text-[clamp(52px,13vw,75px)] max-[680px]:tracking-[-3.5px] max-[370px]:text-[49px]"
          style={{ animationDelay: "120ms" }}
        >
          Otabek
          <br />
          <span className={gradientText}>Yo‘ldoshev</span>
        </h1>

        <h2
          className="motion-rise mb-[18px] text-[17px] font-bold tracking-[-0.4px] max-[680px]:text-[15px]"
          style={{ animationDelay: "180ms" }}
        >
          Frontend Developer
          <span className="ml-[7px] text-purple">/</span>
        </h2>

        <p
          className="motion-rise max-w-[430px] text-[13px] leading-[1.9] text-muted max-[680px]:max-w-[400px] max-[680px]:text-xs light:text-[#666b7f]"
          style={{ animationDelay: "230ms" }}
        >
          React, TypeScript va Next.js yordamida zamonaviy, responsive
          va foydalanuvchilar uchun qulay web ilovalar yarataman.
          Hozirda yangi tajriba orttirish va professional jamoada
          rivojlanishga intilyapman.
        </p>

        <div
          className="motion-rise mt-[26px] flex flex-wrap gap-3 max-[680px]:gap-[9px] max-[370px]:flex-col"
          style={{ animationDelay: "290ms" }}
        >
          <Link href="#projects" className={btnPrimary}>
            Loyihalarimni ko‘rish
            <ArrowUpRight size={16} />
          </Link>

          <Link href="#contact" className={btnSecondary}>
            Men bilan bog‘lanish
            <Send size={15} />
          </Link>
        </div>

        <div
          className="motion-rise mt-[35px] flex gap-[23px] max-[680px]:mt-[26px] max-[680px]:gap-[17px]"
          style={{ animationDelay: "350ms" }}
        >
          <a
            href="https://github.com/YoldoshevOtabek"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[7px] text-[11px] text-[#a2a7bc] transition hover:text-ink light:text-[#5c6276]"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[7px] text-[11px] text-[#a2a7bc] transition hover:text-ink light:text-[#5c6276]"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://t.me/Otabek_Y_2000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[7px] text-[11px] text-[#a2a7bc] transition hover:text-ink light:text-[#5c6276]"
          >
            <Send size={15} />
            Telegram
          </a>
        </div>
      </div>

      <div className="motion-rise" style={{ animationDelay: "160ms" }}>
      <div
        className="relative isolate grid h-[480px] place-items-center max-[950px]:origin-center max-[950px]:scale-[0.88] max-[680px]:my-[15px] max-[680px]:-mb-[5px] max-[680px]:h-[340px] max-[680px]:w-full max-[680px]:scale-90 max-[370px]:mx-[-5px] max-[370px]:w-[calc(100%+10px)] max-[370px]:scale-[0.82]"
        aria-label="Frontend texnologiyalari tasviri"
      >
        <div className="absolute inset-y-10 -z-[1] w-full bg-[linear-gradient(#9e8aff0a_1px,transparent_1px),linear-gradient(90deg,#9e8aff0a_1px,transparent_1px)] bg-size-[30px_30px] mask-[radial-gradient(ellipse,black,transparent_72%)]" />
        <div className="motion-orbit-a absolute size-[390px] h-[270px] rounded-full border border-[#7b69c52a] max-[680px]:h-[220px] max-[680px]:w-[290px]" />
        <div className="motion-orbit-b absolute h-[420px] w-[315px] rounded-full border border-[#7b69c52a] max-[680px]:h-[300px] max-[680px]:w-[250px]" />

        <div
          className="motion-float absolute top-[92px] left-[calc(50%-115px)] h-[270px] w-[230px] max-[680px]:top-[61px] max-[680px]:left-[calc(50%-85px)] max-[680px]:h-[200px] max-[680px]:w-[170px]"
          style={{ animationDelay: "0.2s" }}
        >
        <div className="grid size-full place-items-center rounded-[46%_54%_48%_52%/42%_44%_56%_58%] bg-[linear-gradient(140deg,#392d70,#1a2344_56%,#0d131e)] shadow-[inset_0_0_45px_#a18aff20,0_0_90px_#7357e91b] rotate-[-7deg]">
          <div className="absolute inset-[13px] rounded-[inherit] border border-[#b1a0ff26]" />
          <div className="text-[66px] font-extrabold tracking-[-7px] text-[#c5b8ff] rotate-7 text-shadow-[0_0_50px_#9270ff6b] max-[680px]:text-[53px]">
            O<span className="ml-2 align-top text-[23px] text-cyan">;</span>
          </div>
        </div>
        </div>

        <div
          className="motion-float absolute top-[110px] left-[calc(50%-155px)] z-[2] w-[310px] max-[680px]:top-20 max-[680px]:left-[calc(50%-130px)] max-[680px]:w-[260px]"
          style={{ animationDelay: "0.6s" }}
        >
        <div className="overflow-hidden rounded-[13px] border border-[#34334f] bg-[linear-gradient(145deg,#111521ed,#0a0d16f2)] shadow-[0_30px_90px_#0008] rotate-3">
          <div className="flex h-[37px] items-center gap-[5px] border-b border-[#262a3b] px-3">
            <span className="size-1.5 rounded-full bg-[#f2788a]" />
            <span className="size-1.5 rounded-full bg-[#e8c66b]" />
            <span className="size-1.5 rounded-full bg-[#72d9a4]" />
            <small className="ml-auto font-mono text-[9px] text-[#737a95]">
              portfolio.tsx
            </small>
          </div>

          <div className="px-[13px] pt-[13px] pb-2.5 font-mono text-[10px] leading-[1.95] text-[#a9b2cc] max-[680px]:text-[9px]">
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">01</i>{" "}
              <b className="font-normal text-[#b49cff]">const</b> developer = {"{"}
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">02</i>
              &nbsp; name: <em className="not-italic text-[#70d9cf]">&quot;Otabek&quot;</em>,
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">03</i>
              &nbsp; role:{" "}
              <em className="not-italic text-[#70d9cf]">&quot;Frontend Dev&quot;</em>,
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">04</i>
              &nbsp; skills: [
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">05</i>
              &nbsp;&nbsp; <strong className="font-normal text-[#e3c17c]">&quot;React&quot;</strong>,
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">06</i>
              &nbsp;&nbsp;{" "}
              <strong className="font-normal text-[#e3c17c]">&quot;TypeScript&quot;</strong>,
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">07</i>
              &nbsp;&nbsp; <strong className="font-normal text-[#e3c17c]">&quot;Next.js&quot;</strong>
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">08</i>
              &nbsp; ]
            </p>
            <p className="m-0">
              <i className="mr-[7px] not-italic text-[#555d78]">09</i> {"}"}
            </p>
          </div>

          <div className="flex justify-between border-t border-[#252a3b] px-3 py-[9px] font-mono text-[8px] text-[#7e859d]">
            <span className="inline-flex items-center">
              <span className="mr-[5px] inline-block size-[5px] rounded-full bg-green" />{" "}
              Ready to build
            </span>
            <span>TSX</span>
          </div>
        </div>
        </div>

        <div
          className="motion-float absolute top-[78px] left-0 z-[3] flex items-center gap-[9px] rounded-[10px] border border-[#2c3047] bg-[#111522ef] px-3 py-2.5 shadow-[0_12px_30px_#0005] backdrop-blur-[10px] max-[680px]:top-[35px] max-[680px]:-left-[7px] max-[680px]:gap-1.5 max-[680px]:px-2 max-[680px]:py-[7px]"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="grid size-[29px] place-items-center rounded-lg bg-[#25203e] font-extrabold text-[#b9a5ff] max-[680px]:size-6">
            ⚛
          </span>
          <div className="text-white">
            <b className="block text-[10px] max-[680px]:text-[9px]">React.js</b>
            <small className="mt-[3px] block text-[8px] text-[#858ca4] max-[680px]:text-[7px]">
              Component UI
            </small>
          </div>
        </div>

        <div
          className="motion-float absolute top-[215px] -right-[5px] z-[3] flex items-center gap-[9px] rounded-[10px] border border-[#2c3047] bg-[#111522ef] px-3 py-2.5 shadow-[0_12px_30px_#0005] backdrop-blur-[10px] max-[680px]:top-[180px] max-[680px]:-right-2.5 max-[680px]:gap-1.5 max-[680px]:px-2 max-[680px]:py-[7px]"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="grid size-[29px] place-items-center rounded-lg bg-[#172f4d] text-[10px] font-extrabold text-[#78b8ff] max-[680px]:size-6">
            TS
          </span>
          <div className="text-white">
            <b className="block text-[10px] max-[680px]:text-[9px]">TypeScript</b>
            <small className="mt-[3px] block text-[8px] text-[#858ca4] max-[680px]:text-[7px]">
              Type-safe code
            </small>
          </div>
        </div>

        <div
          className="motion-float absolute bottom-[77px] left-[35px] z-[3] flex items-center gap-[9px] rounded-[10px] border border-[#2c3047] bg-[#111522ef] px-3 py-2.5 shadow-[0_12px_30px_#0005] backdrop-blur-[10px] max-[680px]:bottom-[50px] max-[680px]:left-0 max-[680px]:gap-1.5 max-[680px]:px-2 max-[680px]:py-[7px]"
          style={{ animationDelay: "1.3s" }}
        >
          <span className="grid size-[29px] place-items-center rounded-lg bg-[#222431] font-extrabold text-white max-[680px]:size-6">
            N
          </span>
          <div className="text-white">
            <b className="block text-[10px] max-[680px]:text-[9px]">Next.js</b>
            <small className="mt-[3px] block text-[8px] text-[#858ca4] max-[680px]:text-[7px]">
              Modern web apps
            </small>
          </div>
        </div>

        <div className="absolute right-1 bottom-[22px] left-1 flex justify-between font-mono text-[9px] tracking-[1px] text-[#666e86] max-[680px]:bottom-0">
          <span>CREATIVE DEVELOPMENT</span>
          <span className="flex items-center gap-[7px]">
            <span className="motion-pulse inline-block size-[7px] rounded-full bg-green shadow-[0_0_13px_#81e6b080]" />{" "}
            OPEN TO OPPORTUNITIES
          </span>
        </div>
      </div>
      </div>

      <a
        className="absolute bottom-[25px] left-0 flex items-center gap-2.5 font-mono text-[9px] tracking-[1.2px] text-[#6f758d] max-[680px]:bottom-[17px] max-[680px]:text-[8px]"
        href="#about"
      >
        <span className="h-px w-8 bg-[#5d547f]" />
        <ArrowDown size={13} className="motion-bob" />
        KO&apos;PROQ KO&apos;RISH
      </a>
    </section>
  );
}
