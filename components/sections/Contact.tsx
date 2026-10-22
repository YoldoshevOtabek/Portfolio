"use client";

import { ArrowUpRight, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  wrap,
  sectionLabel,
  gradientText,
  btnPrimary,
} from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      className="relative overflow-hidden border-y border-[#202333] bg-[#0b0d16] light:border-[#e0e3ee] light:bg-[#eef0f8]"
      id="contact"
    >
      <div className="absolute top-0 -right-[180px] size-[400px] rounded-full bg-[#6c4bdc16] blur-[90px]" />

      <div className={`${wrap} relative pt-[74px] pb-[84px] max-[680px]:pt-[62px] max-[680px]:pb-[60px]`}>
        <div className={sectionLabel}>
          <span className="text-[11px] text-purple">04</span> / {t.contact.label}
        </div>

        <div className="grid grid-cols-[1fr_0.85fr] gap-[100px] pt-8 max-[950px]:gap-[45px] max-[680px]:grid-cols-1 max-[680px]:gap-8 max-[680px]:pt-6">
          <Reveal>
          <div>
            <div className="flex items-center gap-[9px] font-mono text-[9px] tracking-[1.1px] text-[#b9b4d8]">
              <span className="motion-pulse inline-block size-[7px] rounded-full bg-green shadow-[0_0_13px_#81e6b080]" />
              {t.contact.badge}
            </div>

            <h2 className="my-[25px] text-[clamp(46px,6vw,68px)] leading-[1.05] tracking-[-3px] max-[680px]:mt-5 max-[680px]:text-[53px] max-[680px]:tracking-[-2.4px] max-[370px]:text-[46px]">
              {t.contact.titleA}
              <br />
              <span className={gradientText}>{t.contact.titleB}</span>
            </h2>

            <p className="max-w-[410px] text-xs leading-[1.9] text-muted light:text-[#666b7f]">
              {t.contact.text}
            </p>

            <a
              href="mailto:yoldoshevo2000@gmail.com"
              className={`${btnPrimary} mt-[15px]`}
            >
              <Mail size={16} />
              {t.contact.emailCta}
              <ArrowUpRight size={15} />
            </a>
          </div>
          </Reveal>

          <Reveal delay={120} className="grid content-center">
          <div className="grid content-center gap-2.5 max-[680px]:gap-2">
            <a
              href="mailto:yoldoshevo2000@gmail.com"
              className="flex items-center gap-[13px] rounded-xl border border-[#282b3c] bg-[#111420b8] p-[15px] transition hover:translate-x-[3px] hover:border-[#594b89] max-[680px]:gap-2.5 max-[680px]:p-3 light:border-[#e0e3ee] light:bg-white"
            >
              <span className="grid size-[39px] shrink-0 place-items-center rounded-[10px] bg-[#26203f] text-[#b3a0ff] max-[680px]:size-[35px]">
                <Mail size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <small className="mb-1.5 block font-mono text-[9px] tracking-[1px] text-[#767e96] light:text-[#777d91]">
                  {t.contact.email}
                </small>
                <b className="text-[11px] wrap-anywhere max-[680px]:text-[10px] light:text-[#29283c]">
                  yoldoshevo2000@gmail.com
                </b>
              </span>
              <ArrowUpRight size={16} className="text-[#737a91]" />
            </a>

            <a
              href="tel:+998903224966"
              className="flex items-center gap-[13px] rounded-xl border border-[#282b3c] bg-[#111420b8] p-[15px] transition hover:translate-x-[3px] hover:border-[#594b89] max-[680px]:gap-2.5 max-[680px]:p-3 light:border-[#e0e3ee] light:bg-white"
            >
              <span className="grid size-[39px] shrink-0 place-items-center rounded-[10px] bg-[#26203f] text-[#b3a0ff] max-[680px]:size-[35px]">
                <MessageCircle size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <small className="mb-1.5 block font-mono text-[9px] tracking-[1px] text-[#767e96] light:text-[#777d91]">
                  {t.contact.phone}
                </small>
                <b className="text-[11px] max-[680px]:text-[10px] light:text-[#29283c]">
                  +998 90 322 49 66
                </b>
              </span>
              <ArrowUpRight size={16} className="text-[#737a91]" />
            </a>

            <a
              href="https://t.me/Otabek_Y_2000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[13px] rounded-xl border border-[#282b3c] bg-[#111420b8] p-[15px] transition hover:translate-x-[3px] hover:border-[#594b89] max-[680px]:gap-2.5 max-[680px]:p-3 light:border-[#e0e3ee] light:bg-white"
            >
              <span className="grid size-[39px] shrink-0 place-items-center rounded-[10px] bg-[#26203f] text-[#b3a0ff] max-[680px]:size-[35px]">
                <Send size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <small className="mb-1.5 block font-mono text-[9px] tracking-[1px] text-[#767e96] light:text-[#777d91]">
                  {t.contact.telegram}
                </small>
                <b className="text-[11px] max-[680px]:text-[10px] light:text-[#29283c]">
                  @Otabek_Y_2000
                </b>
              </span>
              <ArrowUpRight size={16} className="text-[#737a91]" />
            </a>

            <div className="flex items-center gap-[13px] rounded-xl border border-[#282b3c] bg-[#111420b8] p-[15px] max-[680px]:gap-2.5 max-[680px]:p-3 light:border-[#e0e3ee] light:bg-white">
              <span className="grid size-[39px] shrink-0 place-items-center rounded-[10px] bg-[#26203f] text-[#b3a0ff] max-[680px]:size-[35px]">
                <MapPin size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <small className="mb-1.5 block font-mono text-[9px] tracking-[1px] text-[#767e96] light:text-[#777d91]">
                  {t.contact.location}
                </small>
                <b className="text-[11px] max-[680px]:text-[10px] light:text-[#29283c]">
                  {t.contact.locationValue}
                </b>
              </span>
            </div>

            <div className="mt-[5px] flex gap-2.5">
              <a
                href="https://github.com/YoldoshevOtabek"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#292d40] px-[13px] py-2.5 text-[10px] text-[#aeb3c5] hover:border-purple hover:text-white light:border-[#dfe2ed] light:text-[#555a70]"
              >
                <FaGithub size={15} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/otabek-yoldoshev-75aa60440/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#292d40] px-[13px] py-2.5 text-[10px] text-[#aeb3c5] hover:border-purple hover:text-white light:border-[#dfe2ed] light:text-[#555a70]"
              >
                <FaLinkedinIn size={15} /> LinkedIn
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
