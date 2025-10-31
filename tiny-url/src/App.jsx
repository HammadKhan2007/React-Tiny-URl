import React from 'react';
import Header from './components/Header';
import ShortenForm from './components/ShortenForm';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'; // Apni main CSS file import karein

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content-wrapper">
        <ShortenForm />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
