import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardPage from '../pages/Dashboard';
import DoctorMaster from '../pages/masters/MasterDoctor/doctorMaster';
import Registration from '../pages/transactions/Registration/Registration'
import DepartmentMaster from '../pages/masters/MasterDepartment/departmentMaster';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="DoctorMaster" element={<DoctorMaster />} />
          <Route path="DepartmentMaster" element={<DepartmentMaster />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;