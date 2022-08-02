import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: ReactNode;
};

const ScreenContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0075BE',
        width: "340px",
        height: "600px",
        borderRadius: "20px",
        padding: "1rem",
        color: "white",
        overflow: "hidden"
      }}
    >
      {children}
    </Box>
  );
};

export default ScreenContainer;