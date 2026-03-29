"use client";

export default function ButtondownForm() {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/endofcoding"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open("https://buttondown.email/endofcoding", "popupwindow");
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
