import React from 'react';

// External Components
import { Box } from 'theme';

export const Spacer = ({ height, display, sx, ...props }) => {
  return (
    <Box
      className="spacer"
      sx={{
        height,
        display,
        ...sx
      }}
      {...props}
    />
  );
};

export const GridSpacer = ({ height, display, sx, ...props }) => {
  return (
    <Spacer
      className="grid-spacer"
      height={height}
      display={display}
      sx={{
        gridColumn: ['1/13', '1/25'],
        ...sx
      }}
      {...props}
    />
  );
};
