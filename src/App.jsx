// src/App.jsx
import './App.css';
import ScrollToTop from "./features/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/fonts.css';

// Layouts
import { BusLayout } from './Layouts/BusLayout';
import { FoodLayout } from './Layouts/FoodLayout';
import { InfoLayout } from './Layouts/InfoLayout';
import { HostelLayout } from './Layouts/HostelLayout';
import { UpdateLayout } from './Layouts/UpdateLayout';

// Pages
import BusNow from './Pages/bus_pages/bus_now';
import BusAll from './Pages/bus_pages/bus_all';
import Sunday from './Pages/food_pages/sunday';
import Monday from './Pages/food_pages/monday';
import Tuesday from './Pages/food_pages/tuesday';
import Wednesday from './Pages/food_pages/wednesday';
import Thursday from './Pages/food_pages/thursday';
import Friday from './Pages/food_pages/friday';
import Saturday from './Pages/food_pages/saturday';
import Food from './Pages/food_pages/food';
import Contact from './Pages/info_pages/contact';
import FoodInfo from './Pages/info_pages/food_info';
import WashingMachine from './Pages/info_pages/washing_m';
import Hostel from './Pages/hostel_pages/hostel';
import Update from './Pages/update_pages/update';
import Complaints from './Pages/info_pages/complaints';
import ComplaintsAdmin from './Pages/admin_pages/complaints_admin';

function App() {
  return (
    <main style={{ backgroundColor: "#121212", height: "auto", minHeight: '10vh', color: "white" }}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* BUS ROUTES */}
          <Route element={<BusLayout />}>
            <Route path='/' element={<BusNow />} />
            <Route path='/bus-all' element={<BusAll />} />
          </Route>

          {/* FOOD ROUTES */}
          <Route element={<FoodLayout />}>
            <Route path='/food' element={<Food />} />
            <Route path='/sunday' element={<Sunday />} />
            <Route path='/monday' element={<Monday />} />
            <Route path='/tuesday' element={<Tuesday />} />
            <Route path='/wednesday' element={<Wednesday />} />
            <Route path='/thursday' element={<Thursday />} />
            <Route path='/friday' element={<Friday />} />
            <Route path='/saturday' element={<Saturday />} />
          </Route>

          {/* INFO ROUTES */}
          <Route element={<InfoLayout />}>
            <Route path='/contact' element={<Contact />} />
            <Route path='/food-info' element={<FoodInfo />} />
            <Route path='/washing-machine' element={<WashingMachine />} />
            <Route path='/complaints' element={<Complaints />} />
          </Route>

          {/* HOSTEL ROUTES */}
          <Route element={<HostelLayout />}>
            <Route path='/hostel' element={<Hostel />} />
          </Route>

          {/* UPDATE ROUTES */}
          <Route element={<UpdateLayout />}>
            <Route path='/update' element={<Update />} />
          </Route>

          {/* LOCAL ADMIN ROUTE */}
          <Route path='/admin-complaints' element={<ComplaintsAdmin />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
