import React from 'react';
import './sass/styles.scss';
import Header from './components/header/Header';
import WelcomePage from './components/welcome-page/Welcome-page';
import About from './components/about/About';
import Keys from './components/keys/keys';

const App:React.FC = () => {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <About />
      <Keys />
    </div>
  );
}

export default App;
