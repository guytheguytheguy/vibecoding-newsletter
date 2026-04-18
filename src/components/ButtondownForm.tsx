"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ButtondownForm() {
  const [state, setState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://buttondown.com/api/emails/embed-subscribe/endofcoding",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setState("success");
      } else {
        const data = await res.json().catch(() => ({}));
        const msg =
          data?.email?.[0] ||
          data?.detail ||
          "Something went wrong. Please try again.";
        setErrorMsg(msg);
        setState("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="subscribe-success">
        <p>🎉 You&apos;re in! Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="embeddable-buttondown-form">
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="you@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === "loading"}
      />
      <input
        type="submit"
        value={state === "loading" ? "Subscribing…" : "Subscribe →"}
        disabled={state === "loading"}
      />
      {state === "error" && (
        <p className="subscribe-error">{errorMsg}</p>
      )}
    </form>
  );
}
