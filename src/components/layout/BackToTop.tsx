export default function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button
      className={`to-top${visible ? ' is-visible' : ''}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
