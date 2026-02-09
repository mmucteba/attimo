"use client";

import { useState } from "react";

type HealthResponse = {
  ok: boolean;
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export default function Home() {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const checkApi = async () => {
    setLoading(true);
    setResult("");
    setError("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/health/`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: HealthResponse = await response.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "520px",
          display: "grid",
          gap: "1rem",
          border: "1px solid #d1d5db",
          borderRadius: "12px",
          padding: "1.25rem",
          background: "#ffffff",
        }}
      >
        <h1 style={{ fontSize: "1.6rem" }}>UI Shell Ready</h1>
        <button
          onClick={checkApi}
          disabled={loading}
          style={{
            width: "fit-content",
            padding: "0.55rem 0.9rem",
            borderRadius: "8px",
            border: "1px solid #1f2937",
            background: "#111827",
            color: "#ffffff",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Checking..." : "Check API"}
        </button>

        {result ? (
          <pre
            style={{
              margin: 0,
              padding: "0.75rem",
              borderRadius: "8px",
              background: "#f3f4f6",
            }}
          >
            {result}
          </pre>
        ) : null}

        {error ? (
          <p style={{ color: "#b91c1c" }}>
            Error: {error}. Make sure Django is running at{" "}
            {`${apiBaseUrl}/api/health/`}.
          </p>
        ) : null}
      </section>
    </main>
  );
}
