"use client";

import { Suspense } from "react";
import DiagnosticQuiz from "@/components/diagnostic/DiagnosticQuiz";

export default function EnDiagnosticPage() {
  return (
    <main className="flex-1">
      <Suspense>
        <DiagnosticQuiz locale="en" />
      </Suspense>
    </main>
  );
}
