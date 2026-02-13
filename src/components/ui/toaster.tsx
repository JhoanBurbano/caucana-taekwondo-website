import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: '#1A1A1A',
          border: '1px solid #D30000',
          color: '#FFFFFF',
        },
      }}
    />
  );
}
