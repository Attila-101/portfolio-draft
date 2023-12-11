import Link from "next/link";

interface ButtonProps {
  link: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: React.ReactNode;
  extraClassName?: string;
}

export default function Button({
  link,
  target,
  extraClassName,
  children,
}: ButtonProps) {
  const isStringProp = typeof children === "string";
  const buttonStyle = `btn w-max border border-primary dark:text-white dark:border-white ${
    isStringProp ? "btn-string" : "btn-non-string"
  } ${extraClassName}`;
  return (
    <Link href={link} className={buttonStyle} target={target}>
      {children}
    </Link>
  );
}
