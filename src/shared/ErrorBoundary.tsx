import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COLORS, FONTS } from '@/lib/constants/theme';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Aquí podrías enviar el error a un servicio de logging
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="min-h-screen flex items-center justify-center p-4"
          style={{ backgroundColor: COLORS.background }}
        >
          <div className="max-w-md w-full text-center">
            <AlertTriangle
              className="w-16 h-16 mx-auto mb-4"
              style={{ color: COLORS.primary }}
            />
            <h1
              className="mb-4"
              style={{
                fontFamily: FONTS.heading,
                fontSize: '32px',
                color: COLORS.white,
              }}
            >
              Algo salió mal
            </h1>
            <p
              className="mb-6"
              style={{
                fontFamily: FONTS.body,
                fontSize: '16px',
                color: COLORS.textSecondary,
              }}
            >
              Lo sentimos, ocurrió un error inesperado. Por favor, intenta recargar la página.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary
                  className="cursor-pointer mb-2"
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: '14px',
                    color: COLORS.textTertiary,
                  }}
                >
                  Detalles del error (solo en desarrollo)
                </summary>
                <pre
                  className="p-4 rounded overflow-auto text-xs"
                  style={{
                    backgroundColor: COLORS.backgroundSecondary,
                    color: COLORS.textSecondary,
                    fontFamily: 'monospace',
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <Button
              onClick={this.handleReset}
              style={{
                fontFamily: FONTS.heading,
                backgroundColor: COLORS.primary,
                color: COLORS.white,
              }}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
