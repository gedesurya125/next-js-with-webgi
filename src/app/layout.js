import { ThemeProvider, themeConfig, theme } from 'theme';
import { Navigation } from 'sections';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme} config={themeConfig}>
        <body>
          <Navigation />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
