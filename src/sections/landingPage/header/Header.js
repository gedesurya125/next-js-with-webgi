'use client';
import { GridSpacer } from 'component/Spacer';
import { WebgiViewer } from 'component/WebgiViewer';
import React from 'react';

// External Components
import { GridTemplate, Heading, Paragraph, Box } from 'theme';

export const Header = () => {
  return (
    <GridTemplate
      sx={{
        height: '100vh'
      }}>
      <Headline />
      <Box
        className="keyboard-container"
        sx={{
          gridColumn: ['1/13', '1/25'],
          position: 'relative',
          width: '100%',
          height: '35rem',
          mt: ['-5rem'],
          mb: ['-5rem'],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <WebgiViewer
          sx={{
            width: '100%',
            height: '35rem',
            position: 'fixed'
          }}
        />
      </Box>
      <Text />
    </GridTemplate>
  );
};

const Headline = () => {
  return (
    <Heading
      sx={{
        gridColumn: ['1/13', '1/25'],
        fontSize: ['3.3rem', '4rem'],
        mt: ['8rem', '10rem']
      }}>
      Welcome to my 3D keyboard
    </Heading>
  );
};

const Text = () => {
  return (
    <Paragraph
      sx={{
        gridColumn: ['1/12', '3/13'],
        fontSize: ['1.8rem', '2rem']
      }}>
      Aliqua sunt irure nisi labore reprehenderit est occaecat nulla ut. Nisi
      nulla pariatur consequat in in officia est labore. Ea non nisi aliquip do
      consectetur sint proident ad nostrud. Cupidatat cillum nulla nulla laboris
      consectetur dolor culpa commodo occaecat dolore. Nisi irure reprehenderit
      mollit excepteur minim cillum do ullamco laborum pariatur elit ullamco
      cupidatat. Aute consequat labore aliquip laborum laboris proident
      consectetur eiusmod ea esse consectetur officia fugiat eiusmod.
    </Paragraph>
  );
};
