import AuditQuizApp from "@/features/audit-quiz/AuditQuizApp";

export const metadata = {
  title: "Profit + AI Leak Quiz - Be Unstoppable 365",
  description:
    "5-minute diagnostic that names your likely profit leak and tells you what to fix first.",
};

export default function Page() {
  return <AuditQuizApp />;
}
