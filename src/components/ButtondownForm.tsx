"use client";

import { useState } from "react";

export default function ButtondownForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="subscribe-success">
        <p>🎉 You&apos;re in! Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/endofcoding"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open("https://buttondown.email/endofcoding", "popupwindow");
        setSubmitted(true);
      }}
      className="embeddable-buttondown-form"
    >
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="you@example.com"
        required
      />
      <input type="submit" value="Subscribe →" />
    </form>
  );
}
