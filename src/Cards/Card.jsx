import React from 'react'
import './card.css'
const Card = () => {
  const statisticsData = [
    {
      id: 'total-projects',
      label: 'Total Projects',
      number: '12',
      subtitle: 'from last month',
      icon: 'ri-file-list-3-line',
      iconClass: 'total',
      
      trendClass: 'positive',
      trendIcon: 'ri-arrow-up-line'
    },
    {
      id: 'in-progress',
      label: 'In Progress',
      number: '7',
      subtitle: 'from last month',
      icon: 'ri-time-line',
      iconClass: 'progress',
      
      trendClass: 'positive',
      trendIcon: 'ri-arrow-up-line'
    },
    {
      id: 'completed',
      label: 'Completed',
      number: '4',
      subtitle: 'from last month',
      icon: 'ri-checkbox-circle-line',
      iconClass: 'completed',
      trend: '+1',
      trendClass: 'positive',
      trendIcon: 'ri-arrow-up-line'
    },
    {
      id: 'overdue',
      label: 'Overdue',
      number: '1',
      subtitle: 'from last month',
      icon: 'ri-error-warning-line',
      iconClass: 'overdue',
      
      trendClass: 'negative',
      trendIcon: 'ri-arrow-down-line'
    }
  ];
  const renderStatCard = (stat) => (
    <div key={stat.id} className="stat-card">
      <div className={`card-icon ${stat.iconClass}`}>
        <i className={stat.icon}></i>
      </div>
      <div className="card-content">
        <div className="card-label">{stat.label}</div>
        <div className="card-number">{stat.number}</div>
        <div className="card-subtitle">{stat.subtitle}</div>
      </div>
      <div className={`card-trend ${stat.trendClass}`}>
        <i className={stat.trendIcon}></i>
        <span>{stat.trend}</span>
      </div>
    </div>
  );
  return (
    <div className="cards-container">
      {statisticsData.map(renderStatCard)}
    </div>
  )
}

export default Card
