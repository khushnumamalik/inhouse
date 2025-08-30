import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Bootstrap CSS and JS - ye sab styling ke liye hai
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

// Ye sab components import kar rahe hain - jaise ki sidebar, pages, etc.
import Sidebar from './Sidebar/Sidebar';

// Dashboard ke different views - admin, HR, aur project dashboard
import Dashboard from './pages/Dashboard';
import HRDashboard from './pages/HRDashboard';
import ProjectDashboard from './pages/ProjectDashboard';

// Project se related sab kuch - projects, tasks, timesheet, aur team leaders
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Timesheet from './pages/Timesheet';
import Leaders from './pages/Leaders';

// Support tickets ke liye - customer support wala system
import TicketsView from './pages/TicketsView';
import TicketDetail from './pages/TicketDetail';

// Clients ke liye - jo log aapke company se kaam karwate hain
import Clients from './pages/Clients';
import ClientProfile from './pages/ClientProfile';

// Employees ke liye - aapke company ke workers
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Holidays from './pages/Holidays';
import AttendanceEmployees from './pages/AttendanceEmployees';
import Attendance from './pages/Attendance';
import LeaveRequest from './pages/LeaveRequest';
import Department from './pages/Department';
import Loan from './pages/Loan';

// Money related pages - invoice, payments, salary
import Invoice from './pages/Invoice';
import Payments from './pages/Payments';
import EmployeeSalary from './pages/EmployeeSalary';

// Utility pages - calendar, chat, contacts, etc.
import Calendar from './pages/Calendar';
import ChatApp from './pages/ChatApp';
import Contacts from './pages/Contacts';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Help from './pages/Help';

// Ye simple component hai jo main dashboard ko render karta hai
// Isko AdminDashboard naam diya hai taki samajhne mein aasan ho
const AdminDashboard = () => <Dashboard />;

/**
 * Main App component - ye sab kuch handle karta hai
 * Sidebar show karta hai aur different pages ko route karta hai
 */
function App() {
  return (
    <>
      {/* Ye sidebar hai jo navigation ke liye use hota hai */}
      <Sidebar />
      
      {/* Ye routes hain - different pages ke liye */}
      <Routes>
        {/* Dashboard ke routes - admin, HR, aur project dashboard */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="/project-dashboard" element={<ProjectDashboard />} />
        
        {/* Project management ke routes - projects, tasks, timesheet, leaders */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/leaders" element={<Leaders />} />
        
        {/* Support tickets ke routes - customer support system */}
        <Route path="/tickets-view" element={<TicketsView />} />
        <Route path="/ticket-detail" element={<TicketDetail />} />
        
        {/* Clients ke routes - jo log aapke company se kaam karwate hain */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/client-profile" element={<ClientProfile />} />
        
        {/* Employees ke routes - aapke company ke workers */}
        <Route path="/members" element={<Members />} />
        <Route path="/members-profile" element={<MemberProfile />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/attendance-employees" element={<AttendanceEmployees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/department" element={<Department />} />
        <Route path="/loan" element={<Loan />} />
        {/* <Route path="/loan" element={<Loan />} /> */}
        
        
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/employee-salary" element={<EmployeeSalary />} />
        
      
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chat-app" element={<ChatApp />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:userId" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App
