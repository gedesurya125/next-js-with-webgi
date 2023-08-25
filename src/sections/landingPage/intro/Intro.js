import { GridSpacer } from 'component/Spacer';
import React from 'react';

// External Components
import { GridTemplate, Heading, Paragraph } from 'theme';

export const Intro = ({ ...props }) => {
  return (
    <GridTemplate sx={{}} {...props}>
      <GridSpacer
        height={['40rem', '40rem']}
        className="spacer-for-animation"
      />
      <Headline />
      <Text />
    </GridTemplate>
  );
};

const Headline = () => {
  return (
    <Heading
      sx={{
        fontSize: ['3rem', '3.3rem'],
        lineHeight: 1,
        textAlign: 'center',
        gridColumn: ['1/13', '4/19']
      }}>
      Veniam commodo dolor nulla ex commodo.
    </Heading>
  );
};

const Text = () => {
  return (
    <Paragraph
      sx={{
        gridColumn: ['1/13', '2/ span 15'],
        fontSize: ['1.6rem', '2rem'],
        lineHeight: 1.5,
        textAlign: 'center',
        mt: ['2rem', '3rem']
      }}>
      Et nulla et sit pariatur ad do. Reprehenderit commodo proident laborum
      voluptate cupidatat. Magna commodo laboris est fugiat qui ex.
    </Paragraph>
  );
};
