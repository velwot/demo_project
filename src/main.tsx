import { createRoot } from 'react-dom/client';
import App from './App';
// @ts-ignore: allow importing CSS without type declarations
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
