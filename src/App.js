import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import PlanaGen from './Pages/Solutions/PlanaGen.jsx';
import GreenGen from './Pages/Solutions/GreenGen.jsx';
import LeaseGen from './Pages/Solutions/LeaseGen.jsx';
import RouteGen from './Pages/Solutions/RouteGen.jsx';
import SeaGen from './Pages/Solutions/SeaGen.jsx';
import WhatYouGet from './Pages/WhatYouGet.jsx';
import WhatWeDo from './Pages/WhatWeDo.jsx';
import Boomi from './Pages/Partners/Boomi.jsx';
import Domo from './Pages/Partners/Domo.jsx';
import Planful from './Pages/Partners/Planful.jsx';
import Trinitech from './Pages/Partners/Trinitech.jsx';
import Workday from './Pages/Partners/Workday.jsx';
import APIManagement from './Pages/Integrations/APIManagement.jsx';
import EDIManagement from './Pages/Integrations/EDIManagement.jsx';
import Integration from './Pages/Integrations/Integration.jsx';
import MasterDataHub from './Pages/Integrations/MasterDataHub.jsx';
import WorkflowAutomation from './Pages/Integrations/WorkflowAutomation.jsx';
import Applications from './Pages/HowWeDoIt/Applications.jsx';
import OurWork from './Pages/HowWeDoIt/OurWork.jsx';
import AboutUs from './Pages/About/AboutUs.jsx';
import Contact from './Pages/About/Contact.jsx';
import CoreValues from './Pages/About/CoreValues.jsx';
import NewsandEvents from './Pages/About/NewsandEvents.jsx';
import Resources from './Pages/About/Resources.jsx';
import Careers from './Pages/Careers.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planagen" element={<PlanaGen />} />
          <Route path="/greengen" element={<GreenGen />} />
          <Route path="/leasegen" element={<LeaseGen />} />
          <Route path="/routegen" element={<RouteGen />} />
          <Route path="/seagen" element={<SeaGen />} />
          <Route path="/whatyouget" element={<WhatYouGet />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/boomi" element={<Boomi />} />
          <Route path="/domo" element={<Domo />} />
          <Route path="/planful" element={<Planful />} />
          <Route path="/trinitech" element={<Trinitech />} />
          <Route path="/workday" element={<Workday />} />
          <Route path="/apimanagement" element={<APIManagement />} />
          <Route path="/edimanagement" element={<EDIManagement />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/masterdatahub" element={<MasterDataHub />} />
          <Route path="/workflowautomation" element={<WorkflowAutomation />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corevalues" element={<CoreValues />} />
          <Route path="/newsandevents" element={<NewsandEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
