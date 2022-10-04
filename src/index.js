import React from 'react';
import ReactDOM from 'react-dom/client';
//import 다음 내마음대로 지어주고 어디서 불러오느냐(경로)는 정확해야 함. 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

