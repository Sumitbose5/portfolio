import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`glass rounded-[40px] ${className}`}
    >
      {children}
    </div>
  );
}