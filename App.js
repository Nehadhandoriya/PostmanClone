import React from 'react';
import Home from './Components/Home';
import DataProvider from './Context/DataProvider';

const App = () => {
  return (
    <DataProvider>
     <Home/>
    </DataProvider>
  )
}

export default App;
