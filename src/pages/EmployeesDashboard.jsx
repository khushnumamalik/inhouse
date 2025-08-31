import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./EmployeesDashboard.css";

const EmployeesDashboard = () => {
  // Chart Data
  const data = [
    { name: "On Time", value: 1254, color: "#006699" },
    { name: "Late Attendance", value: 32, color: "#00cc66" },
    { name: "Work From Home", value: 658, color: "#ff6600" },
    { name: "Absent", value: 14, color: "#ff3333" },
    { name: "Sick Leave", value: 68, color: "#ffcc00" },
  ];
const perfData = [
  { name: "Jan", value: 20000 },
  { name: "Feb", value: 22000 },
  { name: "Mar", value: 35000 },
  { name: "Apr", value: 33000 },
  { name: "May", value: 48000 },
  { name: "Jun", value: 60000 },
  { name: "Jul", value: 58000 },
];

const skills = [
  { title: "Figma", pct: 95, date: "15 May 2025", color: "orange" },
  { title: "HTML", pct: 85, date: "12 May 2025", color: "green" },
  { title: "CSS", pct: 70, date: "12 May 2025", color: "purple" },
  { title: "Wordpress", pct: 61, date: "15 May 2025", color: "blue" },
  { title: "Javascript", pct: 58, date: "13 May 2025", color: "black" },
];

const teamMembers = [
  { name: "Alexander Jermai", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { name: "Doglas Martini", role: "Product Designer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
  { name: "Daniel Esbella", role: "Project Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { name: "Daniel Esbella", role: "Team Lead", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" },
  { name: "Stephan Peralt", role: "Team Lead", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
  { name: "Andrew Jermia", role: "Project Lead", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
  
];

const notifications = [
  { name: "Lex Murphy", action: "requested access to UNIX", time: "Today at 9:42 AM", file: "EY_review.pdf", type: "warning", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { name: "Lex Murphy", action: "requested access to UNIX", time: "Today at 10:00 AM", type: "info", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { name: "Lex Murphy", action: "requested access to UNIX", time: "Today at 10:50 AM", type: "warning", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
  { name: "Lex Murphy", action: "requested access to UNIX", time: "Today at 12:00 PM", type: "info", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },

];

const meetings = [
  { time: "09:25 AM", title: "Marketing Strategy Presentation", type: "Marketing" },
  { time: "09:20 AM", title: "Design Review Hospital, doctors Management Project", type: "Review" },
  { time: "09:18 AM", title: "Birthday Celebration of Employee", type: "Celebration" },
  { time: "09:10 AM", title: "Update of Project Flow", type: "Development" },
  { time: "09:10 AM", title: "Update of Project Flow", type: "Development" },
  { time: "09:10 AM", title: "Update of Project Flow", type: "Development" },
];
  return (
    <>
    <div className="employee-dashboard">
      {/* Alert */}
      <div className="alert">
        Your Leave Request on <b>24th April 2024</b> has been Approved!!!
      </div>

      <div className="dashboard-grid">
        {/* Left Card - Profile */}
        <div className="card profile-card">
          <div className="profile-header">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="John Doe" className="profile-img" />
            <div>
              <h3>Stephan Peralt</h3>
              <p>Senior Product Designer • UI/UX Design</p>
            </div>
          </div>
          <div className="profile-details">
            <p>
              <b>Phone Number:</b> +1 324 3453 545
            </p>
            <p>
              <b>Email Address:</b> Steperde124@example.com
            </p>
            <p>
              <b>Report Office:</b> Doglas Martini
            </p>
            <p>
              <b>Joined on:</b> 15 Jan 2024
            </p>
          </div>
        </div>

        {/* Middle Card - Leave Graph */}
        <div className="card chart-card">
          <div className="chart-header">
            <h3>Leave Details</h3>
            <div className="year-selector">
              <i className="ri-calendar-line"></i>
              <span>2024</span>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-left">
              <ul className="legend">
                {data.map((item, i) => (
                  <li key={i}>
                    <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                    <span className="legend-value">{item.value}</span>
                    <span className="legend-label">{item.name}</span>
                  </li>
                ))}
              </ul>
              <br /> <br />
              <p className="compare">Better than <strong>85%</strong> of Employees</p>
            </div>
            <div className="chart-right">
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={data}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={75}
                      paddingAngle={2}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/*  Leave Summary */}
        <div className="card">
          <h3>Leave Details (2024)</h3>
          <br />
          <div className="leave-summary">
            <p>Total Leaves: <b>16</b></p>
            <p>Taken: <b>10</b></p>
            <p>Absent: <b>2</b></p>
            <p>Request: <b>0</b></p>
            <p>Worked Days: <b>240</b></p>
            <p>Loss of Pay: <b>2</b></p>
          </div>
          <br /> <br /> <br />
          <button className="apply-btn">Apply New Leave</button>
        </div>
      </div>
    </div>
    <div className="attendance-dashboard">
      <div className="attendance-top-row">
        {/* Left Attendance Card */}
        <div className="card left-card">
          <h3>Attendance</h3>
          <p className="time">08:35 AM, 11 Mar 2025</p>

          <div className="circular-chart">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={[{ value: 75 }, { value: 25 }]}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  startAngle={90}
                  endAngle={450}
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#f3f4f6" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-center">
              <p>Total Hours</p>
              <h2>5:45:32</h2>
            </div>
          </div>

          <div className="production-badge">Production : 3.45 hrs</div>
          <p className="punch"><i className="ri-checkbox-circle-fill punch-icon"></i> Punch in at 10:00 AM</p>
          <button className="punchout-btn">Punch Out</button>
        </div>

        {/* Right Stats Cards */}
        <div className="right-section">
          <div className="stats-row">
            <div className="mini-card orange">
              <i className="ri-calendar-line card-icon"></i>
              <h4>8.36 <span>/ 9</span></h4>
              <p>Total Hours Today</p>
              <span><i className="ri-checkbox-circle-fill green-icon"></i> 5% This Week</span>
            </div>
            <div className="mini-card black">
              <i className="ri-time-line card-icon"></i>
              <h4>10 <span>/ 40</span></h4>
              <p>Total Hours Week</p>
              <span><i className="ri-checkbox-circle-fill green-icon"></i> 7% Last Week</span>
            </div>
            <div className="mini-card blue">
              <i className="ri-bar-chart-line card-icon"></i>
              <h4>75 <span>/ 98</span></h4>
              <p>Total Hours Month</p>
              <span><i className="ri-close-circle-fill red-icon"></i> 8% Last Month</span>
            </div>
            <div className="mini-card pink">
              <i className="ri-timer-line card-icon"></i>
              <h4>16 <span>/ 28</span></h4>
              <p>Overtime this Month</p>
              <span><i className="ri-close-circle-fill red-icon"></i> 0% Last Month</span>
            </div>
          </div>
          
          {/* Timeline Card */}
          <br />
          <div className="card timeline-card">
            <div className="timeline-header">
              <p><b>Total Working hours:</b> 12h 36m</p>
              <p><b>Productive Hours:</b> 08h 36m</p>
              <p><b>Break:</b> 22m 15s</p>
              <p><b>Overtime:</b> 02h 15m</p>
            </div>

            <div className="timeline-bar">
              <div className="block green" style={{ flex: 4 }}></div>
              <div className="block yellow" style={{ flex: 1 }}></div>
              <div className="block green" style={{ flex: 3 }}></div>
              <div className="block blue" style={{ flex: 1 }}></div>
            </div>

            <div className="timeline-hours">
              <span>06:00</span><span>07:00</span><span>08:00</span><span>09:00</span><span>10:00</span><span>11:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="dashboard-row">
      {/* Column 1: Performance */}
      <div className="card performance-card">
        <div className="card-header">
          <h3>Performance</h3>
          <span className="small">2024</span>
        </div>

        <div className="performance-top">
          <div className="percent">98%</div>
          <div className="trend">↑ 12% <span className="muted">vs last years</span></div>
        </div>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={perfData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#86efac" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(v) => (v >= 1000 ? `${v/1000}k` : v)} />
              <Tooltip formatter={(val) => new Intl.NumberFormat().format(val)} />
              <Area type="monotone" dataKey="value" stroke="#16a34a" fill="url(#grad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <p className="performance-note"><b>98%</b> <span className="green">↑ 12%</span> vs last years</p>
      </div>

      {/* Column 2: My Skills */}
      <div className="card skills-card">
        <div className="card-header">
          <h3>My Skills</h3>
          <span className="small">2024</span>
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <div key={i} className="skill-item">
              <div className="skill-header">
                <div className="skill-left">
                  <b>{s.title}</b>
                  <div className="skill-date">Updated : {s.date}</div>
                </div>
                <div className="skill-chart">
                  <ResponsiveContainer width={60} height={60}>
                    <PieChart>
                      <Pie
                        data={[
                          { value: s.pct },
                          { value: 100 - s.pct }
                        ]}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={18}
                        outerRadius={25}
                        startAngle={90}
                        endAngle={450}
                      >
                        <Cell fill={s.color === 'orange' ? '#f97316' : s.color === 'green' ? '#16a34a' : s.color === 'purple' ? '#9333ea' : s.color === 'blue' ? '#2563eb' : '#374151'} />
                        <Cell fill="#f1f5f9" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="skill-percentage">{s.pct}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* birthday card */}
      <div className="right-col">
        <div className="card birthday-card">
          <h4>Team Birthday</h4>
          <div className="birthday-info">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face" alt="Andrew Jermia" />
            <div>
              <div className="b-name">Andrew Jermia</div>
              <div className="b-role">iOS Developer</div>
            </div>
          </div>
          <button className="btn wish">Send Wishes</button>
        </div>

        <div className="card leave-card">
          <h4>Leave Policy</h4>
          <p className="muted">Last Updated : Today</p>
          <button className="btn view blue">View All</button>
        </div>

        <div className="card holiday-card">
          <h4>Next Holiday</h4>
          <p className="muted">Diwali, 15 Sep 2025</p>
          <button className="btn view yellow">View All</button>
        </div>
      </div>
    </div>

    
    <div className="bottom-section">
      {/* Team Members */}
      <div className="card team-card">
        <div className="section-header">
          <h3>Team Members</h3>
          <span className="view-all">View All</span>
        </div>
        <div className="team-list">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-member">
              <div className="member-info">
                <img src={member.avatar} alt={member.name} className="member-avatar" />
                <div className="member-details">
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </div>
              </div>
              <i className="ri-more-2-fill member-menu"></i>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="card notifications-card">
        <div className="section-header">
          <h3>Notifications</h3>
          <span className="view-all">View All</span>
        </div>
        <div className="notifications-list">
          {notifications.map((notif, i) => (
            <div key={i} className="notification-item">
              <div className="notif-avatar">
                <img src={notif.avatar} alt={notif.name} />
              </div>
              <div className="notif-content">
                <div className="notif-text">
                  <strong>{notif.name}</strong> {notif.action}
                </div>
                <div className="notif-time">{notif.time}</div>
                {notif.file && <div className="notif-file">📄 {notif.file}</div>}
                {notif.type === 'warning' && (
                  <div className="notif-actions">
                    <button className="approve-btn">Approve</button>
                    <button className="decline-btn">Decline</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meetings Schedule */}
      <div className="card meetings-card">
        <div className="section-header">
          <h3>Meetings Schedule</h3>
          <span className="today-badge">Today</span>
        </div>
        <div className="meetings-list">
          {meetings.map((meeting, i) => (
            <div key={i} className="meeting-item">
              <div className="meeting-time">{meeting.time}</div>
              <div className="meeting-details">
                <div className="meeting-title">{meeting.title}</div>
                <div className="meeting-type">{meeting.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 </>
  );
};

export default EmployeesDashboard;
