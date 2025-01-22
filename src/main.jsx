import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelancers from './pages/Freelancers';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle'; // Use the updated GlobalStyle
import { ThemeProvider, SurveyProvider } from './utils/context'; // Import your custom ThemeProvider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        {' '}
        {/* Use your custom ThemeProvider */}
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>
);
