import './App.css';
import AboutPage from './components/About';
import Layout from './components/layout/Layout';

function HomePageContent() {
  return <h1>THE MAIN CONTENT HOME PAGE</h1>;
}

function AboutPageContent() {
  return <h1>ABOUT PAGE CONTENT</h1>;
}

function App() {
  return (
    <AboutPage />
  );
}

export default App;
