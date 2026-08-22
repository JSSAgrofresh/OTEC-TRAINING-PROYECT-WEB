export default function ProgressBar({ progressPct }: { progressPct: number }) {
  return <div className="progress-bar" style={{ width: `${progressPct}%` }} />;
}
