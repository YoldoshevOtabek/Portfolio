export type ProjectKind = "shop" | "education" | "users";

export type Project = {
  number: string;
  name: string;
  stack: string[];
  href: string;
  login: string;
  liveUrl?: string;
  kind: ProjectKind;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Bizda CRM",
    login: "LOGIN: 'admin@example.com' * PASSWORD: 'Admin123!'",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "React Query",
      "REST API",
    ],
    href: "https://github.com/YoldoshevOtabek/bizdaCrm",
    liveUrl: "https://bizda-crm-w3o7.vercel.app/",
    kind: "shop",
  },
  {
    number: "02",
    name: "Education CRM",
    login: "LOGIN: 'admin@example.com' * PASSWORD: 'Admin123!'",
    stack: ["React.js", "TypeScript", "Ant Design", "REST API", "Tailwind CSS", "React Query"],
    href: "https://github.com/YoldoshevOtabek/Education-CRM",
    liveUrl: "https://education-crm-inky.vercel.app/",
    kind: "education",
  },
  {
    number: "03",
    name: "Bizda Users",
    login: "",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    href: "https://github.com/YoldoshevOtabek/Bizda-users-Next.js",
    liveUrl: "https://bizda-users-next-js-rhre-chi.vercel.app/",
    kind: "users",
  },
];
