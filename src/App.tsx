import React from 'react';
import './sass/styles.scss';
import Header from './components/header/Header';
import WelcomePage from './components/welcome-page/Welcome-page';
import About from './components/about/About';
import Keys from './components/keys/keys';
import Contact from './components/contact/contact';

const App:React.FC = () => {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <About />
      <Keys />
      <Contact />
    </div>
  );
}

export default App;
