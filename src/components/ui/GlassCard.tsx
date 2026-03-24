'use client';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  solid?: boolean;
}

export default function GlassCard({ children, className = '', solid = false }: GlassCardProps) {
  return (
    <div
      className={`rounded-[12px] ${className}`}
      style={{
        background: solid ? '#111111' : 'rgba(255,255,255,0.04)',
        backdropFilter: solid ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: solid ? 'none' : 'blur(16px)',
        border: `1px solid ${solid ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      {children}
    </div>
  );
}
