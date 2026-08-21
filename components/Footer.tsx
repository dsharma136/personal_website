import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="type-small">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <span className="text-muted"> · </span>
      <span>{year}</span>
    </footer>
  );
}
