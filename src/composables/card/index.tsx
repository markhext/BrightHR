import type { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="space-y-3 rounded-md border bg-white p-4 text-sm shadow-md">
      {children}
    </section>
  );
};

export const CardHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <header className="flex">{children}</header>;
};

export const CardBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex border-b border-dashed pb-2">{children}</div>;
};

export const CardFooter: FC<{ children: ReactNode }> = ({ children }) => {
  return <footer className="flex">{children}</footer>;
};
