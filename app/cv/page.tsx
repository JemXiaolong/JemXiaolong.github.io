import type { Metadata } from "next";
import { Cv } from "@/components/Cv";

export const metadata: Metadata = {
  title: "CV — Eli Jeziel Escudero Maldonado",
  description:
    "Senior Full Stack Developer · Odoo 19. Framework fork, infrastructure, React Native and Next.js products.",
};

export default function CvPage() {
  return <Cv />;
}
