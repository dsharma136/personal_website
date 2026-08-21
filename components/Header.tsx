import Image from "next/image";
import { SectionNav } from "@/components/SectionNav";
import { headerLinks, profile } from "@/lib/content";
import { isLinkReady } from "@/lib/format";

const HEADSHOT_BLUR =
  "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAjEAACAQMCBwEAAAAAAAAAAAABAwIABBESIQUiMUFCUaHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwBTRey4moJuNKSYkKEMiQ8s/vVOJGTt8qYv7l67p4W9kQNhpmRjpSFcyoSluTEEk96FmlU//9k=";

export function Header() {
  return (
    <header className="site-header" aria-label={profile.name}>
      <div className="header-identity">
        <div className="header-headshot box-border shrink-0 overflow-hidden rounded-full border border-hairline">
          <Image
            src="/headshot.jpg"
            alt={profile.name}
            width={72}
            height={72}
            quality={90}
            priority
            placeholder="blur"
            blurDataURL={HEADSHOT_BLUR}
            sizes="(min-width: 1024px) 72px, 64px"
            className="h-full w-full object-cover object-[50%_40%]"
          />
        </div>
        <h1 className="type-display min-w-0 text-ink">{profile.name}</h1>
      </div>

      <div className="header-meta">
        <p className="type-small flex items-center gap-2 font-mono">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>

        <p className="type-small mt-3 font-mono">
          {headerLinks.map((link, index) => (
            <span key={link.label}>
              {index > 0 && <span className="text-hairline"> · </span>}
              {isLinkReady(link.href) ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <span>{link.label}</span>
              )}
            </span>
          ))}
        </p>
      </div>

      <SectionNav />
    </header>
  );
}
