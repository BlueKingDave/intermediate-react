import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Freelancers from './pages/Freelancers';
import Results from './pages/Results';
import Header from './components/Header';
import Error from './components/Error'; // Import Error component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/results" element={<Results />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
