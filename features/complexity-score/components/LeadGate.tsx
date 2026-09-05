"use client";

import { useState } from "react";
import Shell from "./Shell";

export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type Props = {
  /** Resolves once the lead has been sent (or the send has failed). */
  onSubmit: (lead: Lead) => Promise<void> | void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Digits, spaces and the usual separators. Deliberately permissive - people
// write phone numbers in many shapes and a strict rule loses real leads.
const PHONE_RE = /^[+()\d][\d\s().-]{6,}$/;

export default function LeadGate({ onSubmit }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);

  const errors = {
    firstName: firstName.trim() ? "" : "Please add your first name.",
    lastName: lastName.trim() ? "" : "Please add your last name.",
    email: EMAIL_RE.test(email.trim()) ? "" : "That email doesn't look right.",
    // Phone is optional - only complain when something was typed and it
    // clearly isn't a phone number.
    phone:
      !phone.trim() || PHONE_RE.test(phone.trim())
        ? ""
        : "That phone number doesn't look right.",
  };
  const firstError = Object.values(errors).find(Boolean);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (firstError || sending) return;

    setSending(true);
    await onSubmit({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });
    // No setSending(false) - the parent moves to the result screen, and
    // re-enabling the button first would let a double-click send twice.
  }

  const field = (invalid: boolean) =>
    `w-full font-inter text-base p-4 border-2 bg-black/40 text-white placeholder:text-supporting outline-none transition-colors ${
      touched && invalid
        ? "border-neon/70"
        : "border-white/15 focus:border-neon"
    }`;

  return (
    <Shell progress={1}>
      <h2 className="font-space font-bold text-2xl lg:text-3xl text-white mb-4 leading-[1.3]">
        Your Complexity Score&trade; is ready.
      </h2>
      <p className="font-inter text-lg text-supporting leading-[1.6] mb-8">
        Where should we send it? Your score appears on the next screen either
        way.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cs-first" className="sr-only">
              First name (required)
            </label>
            <input
              id="cs-first"
              type="text"
              autoComplete="given-name"
              aria-required="true"
              placeholder="First name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={field(!!errors.firstName)}
            />
          </div>
          <div>
            <label htmlFor="cs-last" className="sr-only">
              Last name (required)
            </label>
            <input
              id="cs-last"
              type="text"
              autoComplete="family-name"
              aria-required="true"
              placeholder="Last name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={field(!!errors.lastName)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cs-email" className="sr-only">
            Email (required)
          </label>
          <input
            id="cs-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-required="true"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field(!!errors.email)}
          />
        </div>

        <div>
          <label htmlFor="cs-phone" className="sr-only">
            Phone number (optional)
          </label>
          <input
            id="cs-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field(!!errors.phone)}
          />
        </div>

        <p className="font-inter text-sm text-supporting">
          <span className="text-neon">*</span> Required
        </p>

        {touched && firstError && (
          <p className="font-inter text-sm text-neon" role="alert">
            {firstError}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className={`w-full sm:w-auto bg-neon text-black font-space font-bold px-8 py-5 text-lg transition-colors ${
            sending ? "opacity-60 cursor-wait" : "hover:bg-white"
          }`}
        >
          {sending ? "SENDING..." : "SHOW ME MY SCORE"}
        </button>
      </form>
    </Shell>
  );
}
