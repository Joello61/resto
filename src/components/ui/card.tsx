import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { Badge } from './badge';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white shadow-md overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

type CardHeaderProps = {
  title: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'neutral';
  className?: string;
};

export function CardHeader({ title, badge, badgeVariant = 'accent', className }: CardHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4', className)}>
      <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
    </div>
  );
}

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('mt-2 text-neutral-600 leading-relaxed', className)}>
      {children}
    </p>
  );
}

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 flex items-center justify-between', className)}>
      {children}
    </div>
  );
}