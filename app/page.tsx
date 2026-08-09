"use client";

import { useState } from "react";

export default function Home() {
  const [recipient, setRecipient] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("Professional");
  const [details, setDetails] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  if (!recipient.trim() || !purpose.trim()) {
    alert("Please enter the recipient and email purpose.");
    return;
  }

  setLoading(true);
  setGeneratedEmail("");

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
        purpose,
        tone,
        details,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || "Failed to generate email.");
    }

    if (!data?.email) {
      throw new Error("No email was returned.");
    }

    setGeneratedEmail(data.email);
  } catch (error) {
    console.error("Email generation error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
  const handleNewEmail = () => {
    setRecipient("");
    setPurpose("");
    setTone("Professional");
    setDetails("");
    setGeneratedEmail("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-yellow-950 via-yellow-950/60 to-black text-white">

      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[-240px] h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[160px]" />

      <div className="pointer-events-none absolute left-[-180px] top-[40%] h-[360px] w-[360px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[55%] h-[360px] w-[360px] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <nav className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-yellow-400/20 bg-white/5 shadow-lg shadow-yellow-500/10 backdrop-blur-xl">

            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-full w-full rounded-full object-cover"
            />

          </div>

          <div>

            <h2 className="text-sm font-bold text-white sm:text-base">
              KrishAIWorks
            </h2>

            <p className="text-[10px] text-zinc-400 sm:text-xs">
              AI Solutions That Work
            </p>

          </div>

        </div>

        <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">

          <a
            href="#features"
            className="transition hover:text-yellow-300"
          >
            Features
          </a>

          <a
            href="#how"
            className="transition hover:text-yellow-300"
          >
            How To Use
          </a>

          <a
            href="#faq"
            className="transition hover:text-yellow-300"
          >
            FAQ
          </a>

          <a
            href="#"
            className="rounded-full bg-yellow-500 px-5 py-2 font-medium text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-400"
          >
            Follow
          </a>

        </div>

        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 md:hidden">
          Menu
        </button>

      </nav>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-24">

       

        <div className="rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-xs text-yellow-200 shadow-lg shadow-yellow-950/30 backdrop-blur-xl">
          ✨ Powered by Gemini AI
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          Built by{" "}
          <span className="font-semibold text-yellow-400">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">

          Write Better Emails

          <br />

          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            In Seconds With AI.
          </span>

        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Create professional, clear and natural emails in seconds.
          Tell AI what you need to say and get a polished email ready
          to send.
        </p>

        {/* Feature Chips */}

        <div className="mt-7 flex flex-wrap justify-center gap-2.5">

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ✉️ Smart Emails
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            ⚡ AI Powered
          </span>

          <span className="rounded-full border border-white/5 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
            🎯 Multiple Tones
          </span>

        </div>

        {/* ================================================= */}
        {/* EMAIL GENERATOR */}
        {/* ================================================= */}

        <div className="mt-12 w-full max-w-4xl">

          <div className="rounded-[2rem] border border-yellow-400/10 bg-zinc-950/60 p-5 shadow-2xl shadow-yellow-950/30 backdrop-blur-2xl sm:p-7">

            <div className="mb-6 text-left">

              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Create Your Email
              </h2>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Tell us what you want to say and let AI write it for you.
              </p>

            </div>

            <div className="space-y-4">

              {/* Recipient */}

              <div className="text-left">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  Recipient
                </label>

                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="e.g. Professor, Manager, Client..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                />

              </div>

              {/* Purpose */}

              <div className="text-left">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  What is the email about?
                </label>

                <input
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="e.g. Request assignment extension..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                />

              </div>

              {/* Tone */}

              <div className="text-left">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  Email Tone
                </label>

                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-sm text-white outline-none transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                >

                  <option className="bg-zinc-950">
                    Professional
                  </option>

                  <option className="bg-zinc-950">
                    Formal
                  </option>

                  <option className="bg-zinc-950">
                    Friendly
                  </option>

                  <option className="bg-zinc-950">
                    Apologetic
                  </option>

                  <option className="bg-zinc-950">
                    Persuasive
                  </option>

                  <option className="bg-zinc-950">
                    Short & Direct
                  </option>

                </select>

              </div>

              {/* Details */}

              <div className="text-left">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  Additional Details
                </label>

                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Add any important details you want included..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm leading-7 text-white outline-none placeholder:text-zinc-600 transition focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/10"
                />

              </div>

              {/* Generate */}

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="h-14 w-full rounded-2xl bg-yellow-500 px-7 text-sm font-semibold text-black shadow-xl shadow-yellow-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading
                  ? "✨ Writing Your Email..."
                  : "✨ Generate Email"}

              </button>

            </div>

            <p className="mt-4 text-left text-xs text-zinc-600">
              AI-generated emails can be edited before sending.
            </p>

          </div>

        </div>

        {/* ================================================= */}
        {/* RESULT */}
        {/* ================================================= */}

        {generatedEmail && (

          <div className="mt-10 w-full max-w-4xl text-left">

            <div className="rounded-[2rem] border border-yellow-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-yellow-950/30 backdrop-blur-2xl sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    ✉️ AI Generated Email
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Generated by Gemini AI
                  </p>

                </div>

                <span className="w-fit rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-xs font-medium text-yellow-300">
                  Completed
                </span>

              </div>

              <div className="mt-7 rounded-2xl border border-white/5 bg-black/30 p-5 sm:p-7">

                <div className="mt-7 rounded-2xl border border-white/5 bg-black/30 p-5 sm:p-7">

  <EmailResult email={generatedEmail} />

</div>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(generatedEmail)
                  }
                  className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-400 active:scale-95"
                >
                  📋 Copy Email
                </button>

                <button
                  onClick={handleNewEmail}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 active:scale-95"
                >
                  🔄 New Email
                </button>

              </div>

            </div>

          </div>

        )}

      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Why Use It
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Emails made effortless.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            Write clearer, more professional emails without spending
            time struggling with the right words.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <FeatureCard
            icon="✍️"
            title="Better Writing"
            description="Turn simple ideas into polished, natural and professional emails."
          />

          <FeatureCard
            icon="🎭"
            title="Choose Your Tone"
            description="Create professional, formal, friendly, apologetic or persuasive emails."
          />

          <FeatureCard
            icon="⚡"
            title="Save Your Time"
            description="Generate a ready-to-edit email in seconds instead of writing from scratch."
          />

        </div>

      </section>

      {/* ================================================= */}
      {/* HOW TO USE */}
      {/* ================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8"
      >

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            How To Use
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Three simple steps.
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <StepCard
            number="01"
            title="Tell Us What You Need"
            description="Enter who the email is for and explain what you want to communicate."
          />

          <StepCard
            number="02"
            title="Choose Your Tone"
            description="Select the tone that fits your situation and add any important details."
          />

          <StepCard
            number="03"
            title="Generate & Copy"
            description="Get a polished AI-written email and copy it whenever you're ready."
          />

        </div>

      </section>

      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl px-5 py-24 sm:px-8"
      >

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-10 space-y-4">

          <Faq
            question="What kind of emails can I create?"
            answer="You can create professional, formal, friendly, apologetic, persuasive and many other types of emails."
          />

          <Faq
            question="Can I choose the tone?"
            answer="Yes. Choose a tone that matches your situation and the AI will adapt the writing style."
          />

          <Faq
            question="Can I edit the generated email?"
            answer="Absolutely. The generated email is meant to be a starting point that you can edit before sending."
          />

          <Faq
            question="Is the email generated by AI?"
            answer="Yes. The final version will be generated using Gemini AI."
          />

        </div>

      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">

        <div className="rounded-[2rem] border border-yellow-400/10 bg-yellow-950/20 px-6 py-14 text-center shadow-2xl shadow-yellow-950/30 backdrop-blur-xl sm:px-12">

         <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-yellow-400/20 bg-white/5 shadow-lg shadow-yellow-500/10">

            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-full w-full rounded-full object-cover"
            />

          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Write your next email with AI.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Stop staring at a blank screen. Tell AI what you want to say
            and get a polished email in seconds.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-xl bg-yellow-500 px-7 py-3 text-sm font-semibold text-black shadow-xl shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            ✨ Write An Email
          </a>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="relative z-10 border-t border-white/5 px-5 py-10">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 sm:flex-row">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-yellow-400/20 bg-white/5">

              <img
                src="/logo.png"
                alt="KrishAIWorks"
                className="h-full w-full object-contain p-1"
              />

            </div>

            <div>

              <p className="font-semibold text-white">
                KrishAIWorks
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>

            </div>

          </div>

          <a
            href="https://instagram.com/KrishAIWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-yellow-400"
          >
            Instagram · @KrishAIWorks
          </a>

          <div className="text-center sm:text-right">

            <p className="text-xs text-zinc-600">
              © 2026 KrishAIWorks
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Built with AI.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

/* ================================================= */
/* FEATURE CARD */
/* ================================================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-zinc-950/40 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 hover:bg-yellow-950/20">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/10 bg-yellow-500/10 text-xl transition group-hover:scale-105">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* ================================================= */
/* STEP CARD */
/* ================================================= */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/5 bg-zinc-950/40 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/15">

      <span className="text-sm font-bold text-yellow-400">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

/* ================================================= */
/* FAQ */
/* ================================================= */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/5 bg-zinc-950/40 p-5 backdrop-blur-xl">

      <summary className="cursor-pointer list-none text-sm font-medium text-zinc-200 sm:text-base">

        <div className="flex items-center justify-between gap-4">

          <span>{question}</span>

          <span className="text-xl text-yellow-400 transition group-open:rotate-45">
            +
          </span>

        </div>

      </summary>

      <p className="mt-4 text-sm leading-7 text-zinc-500">
        {answer}
      </p>

    </details>
  );
}
function EmailResult({ email }: { email: string }) {
  const lines = email.split("\n");

  return (
    <div className="space-y-3">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();

        const isHeading =
          trimmedLine === "SUBJECT" ||
          trimmedLine === "GREETING" ||
          trimmedLine === "BODY" ||
          trimmedLine === "CLOSING";

        if (!trimmedLine) {
          return <div key={index} className="h-2" />;
        }

        if (isHeading) {
          return (
            <h3
              key={index}
              className="mt-5 w-fit rounded-lg border border-yellow-400/20 bg-yellow-500/10 px-3 py-1.5 text-sm font-bold tracking-wide text-white sm:text-base"
            >
              {trimmedLine}
            </h3>
          );
        }

        return (
          <p
            key={index}
            className="break-words whitespace-pre-wrap text-sm leading-8 text-zinc-300"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}