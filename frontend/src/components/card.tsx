import type { ReactNode } from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`bg-eunry-50 shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
};
