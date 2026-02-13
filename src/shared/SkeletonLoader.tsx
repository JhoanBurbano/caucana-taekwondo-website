interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'image' | 'card' | 'button';
  lines?: number;
}

export function SkeletonLoader({
  className = '',
  variant = 'text',
  lines = 1,
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-[#1A1A1A]';

  if (variant === 'image') {
    return <div className={`${baseClasses} ${className}`} />;
  }

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} rounded ${className}`}>
        <div className="h-48 bg-[#1A1A1A] mb-4" />
        <div className="h-4 bg-[#1A1A1A] mb-2 w-3/4" />
        <div className="h-4 bg-[#1A1A1A] w-1/2" />
      </div>
    );
  }

  if (variant === 'button') {
    return <div className={`${baseClasses} h-10 rounded ${className}`} />;
  }

  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${baseClasses} h-4 mb-2 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
}
