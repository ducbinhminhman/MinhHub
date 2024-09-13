import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Nav from './sections/Nav'; // Import the Nav component
import Hero from './sections/Hero';
import BrowseTheRangeSection from './sections/Showcase';
import InspirationCollectionSection from './sections/InspirationCollection';
import MyLatestArticleSection from './sections/Articles';
import MailingListSection from './sections/Subscribe';
import FooterSection from './sections/Footer';
import UnlockInsightSection from './sections/UnlockInsightSection'; // Import the UnlockInsightSection component

// Import pages from the pages folder
import About from './pages/AboutPage'; // Make sure this points to your new pages folder

const Home = () => {
  return (
    <main className='relative'>
      <Hero />
      <InspirationCollectionSection />
      <UnlockInsightSection />
      <BrowseTheRangeSection />
      <MyLatestArticleSection />
      <MailingListSection />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Nav /> {/* Keep Nav outside Routes for consistency across pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        {/* You can add more routes for other subpages here */}
      </Routes>
      <FooterSection /> {/* Keep Footer outside Routes for consistency across pages */}
    </Router>
  );
};

export default App;
