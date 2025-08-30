# AWT CRM Application

A comprehensive Customer Relationship Management (CRM) application built with React, featuring a modern dashboard interface for managing projects, teams, clients, and business operations.

## 🚀 Features

- **Dashboard Overview**: Comprehensive admin, HR, and project dashboards
- **Project Management**: Track projects, tasks, timesheets, and team leaders
- **Client Management**: Manage client profiles and relationships
- **Employee Management**: Handle team members, attendance, leave requests, and departments
- **Financial Tools**: Invoice, payments, and salary management
- **Communication**: Chat app, messaging, and notifications
- **Responsive Design**: Mobile-friendly interface with collapsible sidebar

## 🏗️ Project Structure

```
src/
├── App.jsx                 # Main application component with routing
├── main.jsx               # Application entry point
├── index.css              # Global styles
├── App.css                # App-specific styles
├── Cards/
│   ├── Card.jsx          # Statistics cards component
│   └── card.css          # Card-specific styles
├── pages/
│   ├── Dashboard.jsx     # Main dashboard page
│   ├── HRDashboard.jsx   # HR-specific dashboard
│   ├── ProjectDashboard.jsx # Project management dashboard
│   ├── Projects.jsx      # Projects listing page
│   ├── Tasks.jsx         # Task management page
│   ├── Timesheet.jsx     # Time tracking page
│   ├── Leaders.jsx       # Team leaders page
│   ├── TicketsView.jsx   # Support tickets overview
│   ├── TicketDetail.jsx  # Individual ticket details
│   ├── Clients.jsx       # Client management page
│   ├── ClientProfile.jsx # Individual client profiles
│   ├── Members.jsx       # Team members listing
│   ├── MemberProfile.jsx # Individual member profiles
│   ├── Holidays.jsx      # Holiday management
│   ├── AttendanceEmployees.jsx # Employee attendance tracking
│   ├── Attendance.jsx    # General attendance page
│   ├── LeaveRequest.jsx  # Leave request management
│   ├── Department.jsx    # Department management
│   ├── Loan.jsx          # Loan management
│   ├── Invoice.jsx       # Invoice management
│   ├── Payments.jsx      # Payment tracking
│   ├── EmployeeSalary.jsx # Salary management
│   ├── Calendar.jsx      # Calendar application
│   ├── ChatApp.jsx       # Chat functionality
│   ├── Contacts.jsx      # Contact management
│   ├── Notifications.jsx # Notification center
│   ├── Messages.jsx      # Messaging system
│   ├── Settings.jsx      # Application settings
│   ├── Profile.jsx       # User profile management
│   └── Help.jsx          # Help and support
├── Projectoverview/
│   ├── Project.jsx       # Project overview component
│   └── project.css       # Project-specific styles
├── Sidebar/
│   ├── Sidebar.jsx       # Main navigation sidebar
│   └── Sidebar.css       # Sidebar styles
└── Team/
    ├── Team.jsx          # Team management component
    └── Team.css          # Team-specific styles
```

## 🎯 Key Components

### App.jsx
- **Purpose**: Main application component with routing configuration
- **Features**: 
  - Organized route grouping by functionality
  - Clear import organization with comments
  - Logical route categorization (Dashboard, Project Management, etc.)

### Sidebar.jsx
- **Purpose**: Main navigation component with collapsible menu
- **Features**:
  - Configurable navigation menu structure
  - Dropdown functionality for organized sections
  - Latest projects and messages display
  - Mobile-responsive design

### Dashboard.jsx
- **Purpose**: Main dashboard page component
- **Features**:
  - Clean component organization
  - Clear section separation
  - Modular component structure

### Card.jsx
- **Purpose**: Statistics display component
- **Features**:
  - Configurable statistics data
  - Reusable card rendering
  - Trend indicators for metrics

### Project.jsx
- **Purpose**: Project overview display component
- **Features**:
  - Configurable project data
  - Modular rendering functions
  - Progress tracking visualization

### Team.jsx
- **Purpose**: Team management and notes component
- **Features**:
  - Team member performance tracking
  - Action dropdowns for member management
  - Tomorrow's notes functionality

## 🔧 Code Organization Principles

### 1. **Data Configuration**
- All static data is extracted into configuration objects
- Easy to modify without touching component logic
- Clear separation of data and presentation

### 2. **Component Structure**
- Each component has a clear, single responsibility
- Helper functions are extracted for better readability
- Consistent naming conventions throughout

### 3. **Function Documentation**
- JSDoc comments for all functions
- Clear parameter and return type documentation
- Purpose and usage explanations

### 4. **Modular Rendering**
- Complex UI sections are broken into render functions
- Reusable rendering logic
- Easy to maintain and modify

### 5. **State Management**
- Clear state organization
- Descriptive state variable names
- Logical state update functions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

## 📱 Responsive Design

The application features a responsive design with:
- Collapsible sidebar for mobile devices
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## 🎨 Styling

- **CSS Modules**: Component-specific styles
- **Bootstrap**: Base styling framework
- **Custom CSS**: Application-specific design
- **Responsive Design**: Mobile-first approach

## 🔄 State Management

- **Local State**: React useState for component-level state
- **Props**: Component communication through props
- **Context**: Global state management where needed

## 📝 Code Style

- **ES6+**: Modern JavaScript features
- **JSX**: React component syntax
- **Functional Components**: Hooks-based components
- **Consistent Formatting**: Prettier configuration
- **ESLint**: Code quality enforcement

## 🤝 Contributing

When contributing to this project:

1. Follow the established code organization patterns
2. Add JSDoc comments for new functions
3. Maintain the modular component structure
4. Update this README for significant changes
5. Test responsive design on different screen sizes

## 📚 Additional Resources

- **React Documentation**: https://reactjs.org/
- **React Router**: https://reactrouter.com/
- **Bootstrap**: https://getbootstrap.com/
- **Remix Icons**: https://remixicon.com/

## 🆘 Support

For questions or issues:
1. Check the component documentation in the code
2. Review the routing configuration in App.jsx
3. Examine the data configuration objects
4. Check the CSS files for styling issues

---

**Note**: This application maintains the exact same UI and functionality while providing a much more readable and maintainable codebase for developers.
