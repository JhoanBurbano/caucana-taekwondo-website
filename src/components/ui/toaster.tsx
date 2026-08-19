import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: '#1C1C1E',
          border: '1px solid rgba(255,255,255,0.12)',
          color: '#F5F5F7',
        },
      }}
    />
  );
}
