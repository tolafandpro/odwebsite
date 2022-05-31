import GlobalStyle from './globalStyles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './pages/Themes';
import { Route, Routes  } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
// Pages
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
        <GlobalStyle />
          <ThemeProvider theme={lightTheme}>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<AboutPage/>} />
                  <Route path="/work" element={<WorkPage/>} />
                  <Route path="/skills" element={<SkillsPage/>} />
                  <Route path="/contact" element={<ContactPage/>} />
                </Routes>
              </AnimatePresence>
          </ThemeProvider>
          
    </React.Fragment>

  );
}

export default App;
