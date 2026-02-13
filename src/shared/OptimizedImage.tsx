import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallback,
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImageSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallback) {
      setImageSrc(fallback);
    }
  };

  // Lazy loading con Intersection Observer
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            const img = imgRef.current;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const imageUrl = priority ? imageSrc : undefined;
  const dataSrc = priority ? undefined : imageSrc;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: props.style?.aspectRatio }}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#1A1A1A] animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={imageUrl}
        data-src={dataSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{
          ...props.style,
          objectFit: props.style?.objectFit || 'cover',
        }}
        {...props}
      />
      {hasError && !fallback && (
        <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
          <span className="text-white/40 text-sm">Error al cargar imagen</span>
        </div>
      )}
    </div>
  );
}
