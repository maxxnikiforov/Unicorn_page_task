import React from 'react';
import { Services } from './components/Services/Services';
import { Footer } from './components/Footer/Footer';
import './App.scss';

export const App = () => (
  <div className="page_container">
    <main className="page_container__services">
      <Services />
    </main>
    <Footer />
  </div>
);
