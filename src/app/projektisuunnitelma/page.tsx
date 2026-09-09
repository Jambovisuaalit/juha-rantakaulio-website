import type { Metadata } from "next";
import { ProjectPlanner } from "./ProjectPlanner";

export const metadata: Metadata = {
  title: "Projektisuunnitelma | Juha Rantakaulio Oy × GhoulHouse Oy",
  description: "Yksityinen projektisuunnitelma vaiheiden, vastuiden ja etenemisen hallintaan.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ProjectPlanPage() {
  return <ProjectPlanner />;
}
