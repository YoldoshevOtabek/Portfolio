export type Project = {
    number: string;
    name: string;
    type: string;
    description: string;
    stack: string[];
    href: string;
    kind: "shop" | "education";
    features: string[];
  };
  
  export const projects: Project[] = [
    {
      number: "01",
      name: "BizdaCRM",
      type: "Online shop admin panel",
      description:
        "An admin workspace for managing the day-to-day operations of an online store, from product catalogues to orders and customers.",
      stack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Ant Design",
        "React Query",
        "REST API",
      ],
      href: "https://github.com/YoldoshevOtabek/bizdaCrm",
      kind: "shop",
      features: [
        "Dashboard & store overview",
        "Orders and customers",
        "Products, categories & brands",
        "Banner and profile management",
      ],
    },
    {
      number: "02",
      name: "Education CRM",
      type: "Education center management",
      description:
        "A role-oriented CRM for learning centers, with dedicated workspaces and management tools for the team.",
      stack: [
        "React.js",
        "TypeScript",
        "Ant Design",
        "REST API",
      ],
      href: "https://github.com/YoldoshevOtabek/Education-CRM",
      kind: "education",
      features: [
        "Admin & reception workflows",
        "Teacher and student sections",
        "Directions and groups",
        "Role-based dashboards",
      ],
    },
  ];