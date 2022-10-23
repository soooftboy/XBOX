import React from 'react';
import './style/App.scss';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { Highlights } from './components/Highlights';
import { Games } from './components/Games';
import { DesignLab } from './components/DesignLab';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Carousel />
            <Highlights />
            <Games />
            <DesignLab />
        </main>
        <Footer />
    </div>
  );
}

export default App;
