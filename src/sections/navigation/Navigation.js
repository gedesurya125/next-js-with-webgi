import React from 'react';
// External components
import { Box, Heading, Paragraph, GridTemplate } from 'theme';

export const Navigation = () => {
  return (
    <Box
      className="navigation"
      as="nav"
      sx={{
        bg: 'blue',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      }}>
      <GridTemplate sx={{ py: ['2rem', '3rem'] }}>
        <Paragraph
          sx={{
            gridColumn: ['1/13', '1/25'],
            color: 'white'
          }}>
          Navigation
        </Paragraph>
      </GridTemplate>
    </Box>
  );
};
