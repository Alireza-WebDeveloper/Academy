import { cn } from '@/app/lib/utils/cn';
import Link from 'next/link';

type HrefObject = {
  pathname: string;
  query?: Record<string, string | string[] | undefined>;
};

export type LinkContainerProps = {
  href?: string | null | HrefObject;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const LinkContainer = ({
  href,
  className,
  children,
  id,
}: LinkContainerProps) => {
  return (
    <Link id={id} href={href ?? ''} draggable={false} className={className}>
      {children}
    </Link>
  );
};

export default LinkContainer;
