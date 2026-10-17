export type ProjectKind = "shop" | "education" | "users";

export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  liveUrl?: string;
  kind: ProjectKind;
  features: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Bizda CRM",
    type: "ONLINE SHOP · ADMIN PANEL ",
    description:
      "Mahsulotlar, buyurtmalar, mijozlar va katalogni boshqarish uchun ishlab chiqilgan online shop admin paneli. ",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "React Query",
      "REST API",
    ],
    href: "https://github.com/YoldoshevOtabek/bizdaCrm",
    liveUrl: "https://bizda-crm-w3o7.vercel.app",
    kind: "shop",
    features: [
      "Dashboard va asosiy ko‘rsatkichlar",
      "Buyurtmalarni boshqarish",
      "Mahsulotlar va kategoriyalar",
      "Mijozlar va brendlar",
      "Profil va banner boshqaruvi",
    ],
  },
  {
    number: "02",
    name: "Education CRM",
    type: "EDUCATION · CRM SYSTEM",
    description:
      "O‘quv markazlari ish jarayonlarini boshqarish uchun admin, reception, o‘qituvchi va o‘quvchilar bo‘limlariga ega CRM loyihasi.",
    stack: ["React.js", "TypeScript", "Ant Design", "REST API", "Tailwind CSS", "React Query"],
    href: "https://github.com/YoldoshevOtabek/Education-CRM",
    liveUrl: "https://education-crm-inky.vercel.app/",
    kind: "education",
    features: [
      "Admin va reception bo‘limlari",
      "O‘qituvchilarni boshqarish",
      "O‘quvchilar ro‘yxati",
      "Guruhlar va yo‘nalishlar",
      "Dashboard interfeyslari",
    ],
  },
  {
    number: "03",
    name: "Bizda Users",
    type: "E-COMMERCE · NEXT.JS STOREFRONT",
    description:
      "Bizda CRM bilan ishlaydigan foydalanuvchi tomoni — mahsulotlarni ko‘rish, katalog va xarid jarayoni uchun Next.js asosidagi vitrina.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    href: "https://github.com/YoldoshevOtabek/Bizda-users-Next.js",
    kind: "users",
    features: [
      "Mahsulotlar katalogi",
      "Kategoriya bo‘yicha filter",
      "Mahsulot tafsilotlari",
      "Responsive vitrina",
      "CRM bilan API integratsiyasi",
    ],
  },
];
