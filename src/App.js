import React from 'react';
import Home from './pages/Home/Home';

export const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

/*
import Home from './pages/Home/Home'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
*/