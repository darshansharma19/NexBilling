import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'; 
import Dashboard from './pages/Dashboard'; 
import CreateCompany from './pages/CreateCompany';
import ProductionReport from './pages/productionreport'; 
import MachineReport from './pages/machinereport';
import PurchaseReport from './pages/purchasereport';
import SalesReport from './pages/salesreport';
import ItemReport from './pages/itemreport';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-company" element={<CreateCompany />} />
            <Route path="/production-report" element={<ProductionReport />} /> 
            <Route path="/machine-report" element={<MachineReport />} /> 
            <Route path="/purchase-report" element={<PurchaseReport />} /> 
            <Route path="/sales-report" element={<SalesReport />} /> 
            <Route path="/item-report" element={<ItemReport />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
