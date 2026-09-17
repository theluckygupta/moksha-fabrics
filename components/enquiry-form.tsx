"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "919783123977";

export default function EnquiryForm({ fabricName = "" }: { fabricName?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const fabric = String(form.get("fabric") || fabricName || "").trim();
    const quantity = String(form.get("quantity") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = [
      "Hello Moksha Fabrics,",
      "",
      `I would like to enquire about ${fabric || "fabric"}.`,
      name && `Name: ${name}`,
      company && `Company: ${company}`,
      quantity && `Quantity: ${quantity}`,
      message && `Requirement: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className="enquiryForm" onSubmit={handleSubmit}>
      <div className="formGrid">
        <label>
          Name
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Company <span>(optional)</span>
          <input name="company" placeholder="Business / company" />
        </label>
        <label>
          Fabric
          <input name="fabric" defaultValue={fabricName} placeholder="Fabric name or type" required />
        </label>
        <label>
          Quantity <span>(optional)</span>
          <input name="quantity" placeholder="e.g. 500 metres" />
        </label>
      </div>
      <label>
        Requirement
        <textarea name="message" rows={5} placeholder="Tell us about width, GSM, colour, finish, application or any other requirement." />
      </label>
      <div className="formActions">
        <button className="button buttonDark" type="submit">Continue on WhatsApp →</button>
        <span className="formHint">Opens WhatsApp with your enquiry ready to send.</span>
      </div>
      {sent && <p className="formSuccess" role="status">Your enquiry message has been prepared in WhatsApp.</p>}
    </form>
  );
}
