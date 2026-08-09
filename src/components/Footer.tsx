import { WarliFooterMural } from './art/WarliFooterMural';

export function Footer() {
  return (
    <footer className="pt-8 pb-6 bg-parchment">
      {/* Full-width mural */}
      <div className="text-ink/20 mb-8 overflow-hidden">
        <WarliFooterMural className="w-full min-w-[800px]" />
      </div>

      {/* Footer text */}
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-ink-muted">
          Narayan © {new Date().getFullYear()}
        </p>
        <p className="font-sans text-xs text-ink-muted italic">
          Crafted with Warli-inspired art
        </p>
      </div>
    </footer>
  );
}
