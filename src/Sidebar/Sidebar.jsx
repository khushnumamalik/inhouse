import React, { Component, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

// Sidebar Component
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,      // Dashboard dropdown open or closed
    projects: false,       // Projects dropdown open or closed
    tickets: false,        // Tickets dropdown open or closed
    clients: false,        // Clients dropdown open or closed
    employees: false,      // Employees dropdown open or closed
    accounts: false,       // Accounts dropdown open or closed
    payroll: false,        // Payroll dropdown open or closed
    app: false,            // App dropdown open or closed
    otherPages: false      // Other pages dropdown open or closed
  });

  const location = useLocation(); // Current page path tracker

  const navigationMenu = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'ri-dashboard-fill',
      items: [
        { path: '/admin-dashboard', label: 'Admin Dashboard' },
        { path: '/hr-dashboard', label: 'HR Dashboard' },
        { path: '/project-dashboard', label: 'Project Dashboard' }
      ]
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'ri-article-fill',
      items: [
        { path: '/projects', label: 'Projects' },
        { path: '/tasks', label: 'Tasks' },
        { path: '/timesheet', label: 'Timesheet' },
        { path: '/leaders', label: 'Leaders' }
      ]
    },
    {
      id: 'tickets',
      label: 'Tickets',
      icon: 'ri-ticket-2-fill',
      items: [
        { path: '/tickets-view', label: 'Tickets View' },
        { path: '/ticket-detail', label: 'Ticket Detail' }
      ]
    },
    {
      id: 'clients',
      label: 'Our Clients',
      icon: 'ri-user-3-fill',
      items: [
        { path: '/clients', label: 'Clients' },
        { path: '/client-profile', label: 'Client Profile' }
      ]
    },
    {
      id: 'employees',
      label: 'Employees',
      icon: 'ri-team-fill',
      items: [
        { path: '/members', label: 'Members' },
        { path: '/members-profile', label: 'Members Profile' },
        { path: '/holidays', label: 'Holidays' },
        { path: '/attendance-employees', label: 'Attendance Employees' },
        { path: '/attendance', label: 'Attendance' },
        { path: '/leave-request', label: 'Leave Request' },
        { path: '/department', label: 'Department' },
        { path: '/loan', label: 'Loan' }
      ]
    },
    {
      id: 'accounts',
      label: 'Accounts',
      icon: 'ri-money-dollar-circle-fill',
      items: [
        { path: '/invoice', label: 'Invoice' },
        { path: '/payments', label: 'Payments' }
      ]
    },
    {
      id: 'payroll',
      label: 'Payroll',
      icon: 'ri-wallet-3-fill',
      items: [
        { path: '/employee-salary', label: 'Employee Salary' }
      ]
    },
    {
      id: 'app',
      label: 'App',
      icon: 'ri-apps-2-fill',
      items: [
        { path: '/calendar', label: 'Calendar' },
        { path: '/chat-app', label: 'Chat App' }
      ]
    },
    {
      id: 'otherPages',
      label: 'Other Pages',
      icon: 'ri-pages-fill',
      items: [
        { path: '/contacts', label: 'Contacts' },
        { path: '/notifications', label: 'Notifications' },
        { path: '/messages', label: 'Messages' },
        { path: '/settings', label: 'Settings' },
        { path: '/profile', label: 'Profile' },
        { path: '/help', label: 'Help & Support' }
      ]
    }
  ];
  const latestProjects = [
    { id: 'figma-design', name: 'Deorags', status: 'Progress', color: 'orange' },
    { id: 'keep-react', name: 'Deorags', status: 'Planning', color: 'blue' },
    { id: 'staticmania', name: 'Deorags', status: 'Completed', color: 'green' }
  ];
  const latestMessages = [
    { id: 'alex-morgan', name: 'Om Goyal', time: '2m', preview: 'Hey, can we review...', isRecent: true },
    { id: 'jessica-chen', name: 'Md.Rabil', time: '1h', preview: 'The project the case of...', isRecent: false },
    { id: 'ryan-park', name: 'Khusnuma', time: '3h', preview: 'I have a question...', isRecent: false },
    { id: 'ryan-park-2', name: 'Asha Pal', time: '3h', preview: 'I have a question...', isRecent: false }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };
//  active links
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const renderNavigationMenu = () => (
    <ul className='home-links'>
      {navigationMenu.map((menuItem) => (
        <li key={menuItem.id} className="dropdown-item">
          <div 
            className="dropdown-header" 
            onClick={() => toggleDropdown(menuItem.id)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <div style={{display: 'flex', alignItems: 'center'}}>
              <i className={menuItem.icon}></i>
              <span>{menuItem.label}</span>
            </div>
            <i className={`ri-arrow-${dropdowns[menuItem.id] ? 'up' : 'down'}-s-line dropdown-arrow`}></i>
          </div>
          <ul className="dropdown-menu" style={{ display: dropdowns[menuItem.id] ? 'block' : 'none' }}>
            {menuItem.items.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={isActiveRoute(item.path) ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
  const renderLatestProjects = () => (
    <div className="sidebar-section">
      <h6 className="sidebar-heading">LATEST PROJECTS</h6>
      <ul className="project-list">
        {latestProjects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <div className="project-item">
                <div className="project-left">
                  <span className={`project-dot ${project.color}`}></span>
                  <span className="project-name" style={{whiteSpace:"nowrap"}}>{project.name}</span>
                </div>
                <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/projects" className="see-all-link">See all project</Link>
    </div>
  );

  const renderLatestMessages = () => (
    <div className="sidebar-section">
      <h6 className="sidebar-heading">LATEST MESSAGE</h6>
      <ul className="message-list">
        {latestMessages.map((message) => (
          <li key={message.id}>
            <Link to={`/messages/${message.id}`}>
              <div className="message-info">
                <div className="message-header">
                  <b>{message.name}</b>
                  <span className={`message-time ${message.isRecent ? 'recent' : ''}`}>{message.time}</span>
                </div>
                <div className="message-preview">{message.preview}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/messages" className="see-all-link">See all message</Link>
    </div>
  );
  return (
    <>  
      <div className="header-container">
        <div className="header-left">
          <button className="mobile-toggle" onClick={toggleSidebar}>
            <i className="ri-menu-line"></i>
          </button>
          <img 
            src="https://arawebtechnologies.com/assets/images/araweb-logo.png" 
            alt="Logo" 
            className="header-logo" 
          />
        </div>
        <div className="header-right">
          <span className="icon"><i className="ri-search-line"></i></span>
          <span className="icon"><i className="ri-notification-3-fill"></i></span>
          <button className="btn-project">+ New Project</button>
          <img 
            src="https://arawebtechnologies.com/assets/images/u1.png" 
            alt="User" 
            className="avatar" 
          />
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {renderNavigationMenu()}
        {renderLatestProjects()}
        {renderLatestMessages()}
      </div>
    </>
  )
}
export default Sidebar