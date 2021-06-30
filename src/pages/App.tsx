import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import MainPage from './MainPage';

// TODO add routing with react-router and potentially authentication later on
const App = (): JSX.Element => {
  return <div className="grid">
    <MainPage />;
  </div>;
};

export default App;
