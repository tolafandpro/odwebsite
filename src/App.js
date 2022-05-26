import GlobalStyle from './globalStyles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './pages/Themes';
import { Route, Routes  } from 'react-router-dom';

// Pages
import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <React.Fragment>
        <GlobalStyle />
          <ThemeProvider theme={lightTheme}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/work" element={<WorkPage/>} />
                <Route path="/skills" element={<SkillsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
              </Routes>
          </ThemeProvider>

    </React.Fragment>

  );
}

export default App;
