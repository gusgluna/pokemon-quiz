import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate: any = useNavigate();

  const [navigationValue, setNavigationValue] = useState(0);
  console.log(navigationValue);
  useEffect(() => {
    if (navigationValue == 0) {
      navigate("/");
    }
    if (navigationValue == 1) {
      navigate("/leaderboard");
    }

  }, [navigationValue]);
  return (
    <Box sx={{ height: "10vh" }}>
      <BottomNavigation
        showLabels
        value={navigationValue}
        onChange={(event, newValue) => {
          setNavigationValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Leaderboard" icon={<EmojiEventsIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default NavigationBar;