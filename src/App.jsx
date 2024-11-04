import { useState } from 'react';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAboutContent, setShowAboutContent] = useState(false);

  const handleAboutClick = () => {
    setShowAboutContent(true);
  };

  return (
    <div>
      <Nav onAboutClick={handleAboutClick} />
      {showAboutContent ? (
        <About className="about_css" />
      ) : (
        <Layout />
      )}
      <Footer />
    </div>
  );
}

export default App;
