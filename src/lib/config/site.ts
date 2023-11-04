export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
}

interface SiteConfig {
  name: string;
  landingPageNav: NavItem[];
  applicationNav: Map<string, NavItem[]>;
}

export const siteConfig: SiteConfig = {
  name: "Theorema",
  landingPageNav: [
    {
      title: "Problema",
      href: "#problem",
    },
    {
      title: "Solução",
      href: "#solution",
    },
    {
      title: "Equipa",
      href: "#team",
    },
    {
      title: "Preços",
      href: "#prices",
    },
    {
      title: "Login",
      href: "/login",
    },
  ],
  applicationNav: new Map([
    [
      "professor",
      [
        {
          title: "Visão Geral",
          href: "/dashboard",
        },
        {
          title: "Tópicos",
          href: "/topics",
        },
        {
          title: "Exercícios",
          href: "/exercises-admin",
        },
      ],
    ],
    [
      "student",
      [
        {
          title: "Visão Geral",
          href: "/dashboard",
        },
        {
          title: "Tópicos",
          href: "/topics",
        },
        {
          title: "Exercícios",
          href: "/exercises",
        },
      ],
    ],
    [
      "developer",
      [
        {
          title: "Visão Geral",
          href: "/dashboard",
        },
        {
          title: "Tópicos",
          href: "/topics",
        },
        {
          title: "Exercícios",
          href: "/exercises",
        },
        {
          title: "Component Lab",
          href: "/component-lab",
        },
      ],
    ],
  ]),
};
