import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Dashboard from './Dashboard';


const theme = createTheme({
  // You can customize your theme here
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>{title} Page</h1>
    <p>This is a placeholder for the {title} page</p>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">About</Button>
          <Button color="inherit" component={Link} to="/dashboard">Client List</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    <Container>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<PlaceholderPage title="About" />} />
      </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
