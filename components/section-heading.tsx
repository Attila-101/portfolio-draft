import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[1.9rem] text-center font-semibold lg:text-[3rem] lg:font-semibold mb-8">
      {children}
      <span className="text-[1.1rem] text-secondary"> ■</span>
    </h2>
  );
}
