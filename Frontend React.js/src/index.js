import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(<App />);

serviceWorker.unregister();
