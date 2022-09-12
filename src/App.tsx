import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Container, CssBaseline, ThemeProvider } from '@mui/material';
import QuizPage from "./pages/QuizPage";
import LeaderBoard from "./pages/LeaderBoard";
import theme from "./theme";
import './App.css';
import { Box } from '@mui/system';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';


const ContainerStyles: {} = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "90vh"
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={ContainerStyles}>
          <Routes>
            <Route path="/" element={<QuizPage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>

        </Container>
        <NavigationBar />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
