import React from 'react';
import {BrowserRouter   as Router , Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import OurApplication from './Pages/ourApplications/OurApplication';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import InsurancePackages from './components/InsurancePackages/InsurancePackages';
import AppliedStatus from './components/AppliedStatus/AppliedStatus';

const App = () => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  React.useEffect(() => {
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);


  if (error) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Router>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/myapplications" element={<OurApplication />} />
        <Route path="/pack" element={<InsurancePackages />} />
        <Route path="/data" element={<AppliedStatus />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
