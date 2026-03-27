import type { Metadata } from "next";
import DemoContent from "./DemoContent";

export const metadata: Metadata = {
  title: "Démo",
  description:
    "Découvrez Pauco en action. Testez la démo interactive du logiciel tout-en-un des restaurateurs.",
};

export default function DemoPage() {
  return <DemoContent />;
}
