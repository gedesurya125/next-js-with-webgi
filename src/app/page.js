//  External Components
import { Box, GridTemplate, Heading, Paragraph } from 'theme';

// Section
import { Header, Intro } from 'sections/landingPage';
import { Spacer } from 'component/Spacer';

export default function Home() {
  return (
    <Box as="main">
      <Header />
      <Intro id="intro-one" />
      <Intro id="intro-two" />
      <Spacer height={['50rem', '50rem']} />
    </Box>
  );
}
