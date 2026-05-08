import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border bg-cream">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            Frida<span className="text-rose">.</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-rose transition">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <span className="font-script text-2xl text-rose">información legal</span>
        <h1 className="mt-1 font-display text-5xl font-extrabold">{title}</h1>
        <div className="prose-legal mt-10 space-y-5 text-foreground/85 leading-relaxed">
          {children}
        </div>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Frida's Café · Leipziger Straße 108 · 60487 Frankfurt am Main
      </footer>
    </div>
  );
}
