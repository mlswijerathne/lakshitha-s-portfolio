import { siUpwork } from 'simple-icons';

export function UpworkIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={siUpwork.path} />
    </svg>
  );
}
