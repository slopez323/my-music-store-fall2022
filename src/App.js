import './App.css';
import Layout from './components/layout/Layout';
import CustomThemeProvider from './CustomThemeProvider';

function HomePageContent() {
  return <h1>THE MAIN CONTENT HOME PAGE</h1>;
}

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <HomePageContent />
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
