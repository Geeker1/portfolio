import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BaseLayout } from './Route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BaseLayout/>
    </BrowserRouter>
  );
}


export default App;
