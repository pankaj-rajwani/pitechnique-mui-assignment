import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/styles';
import { Layout } from '@/layout';
import { Procurement } from '@/pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Procurement />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
