import './styles/globals.css';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initAnalytics } from './lib/utils/analytics';

initAnalytics();

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
