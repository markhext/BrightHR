import type { FC, ReactNode } from "react";

export const Details: FC<{ children: ReactNode; label: string }> = ({
  children,
  label,
}) => {
  return (
    <details className="w-full">
      <summary className="cursor-pointer text-xl font-semibold duration-200">
        {label}
      </summary>
      <div className="py-3">{children}</div>
    </details>
  );
};
