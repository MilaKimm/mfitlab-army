"use client";

import { Suspense } from "react";
import DiagnosticQuiz from "@/components/diagnostic/DiagnosticQuiz";

export default function DiagnosticPage() {
  return (
    <main className="flex-1">
      <Suspense>
        <DiagnosticQuiz />
      </Suspense>
    </main>
  );
}
