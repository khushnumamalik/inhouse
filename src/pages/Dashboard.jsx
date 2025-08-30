import React from 'react'
import Card from '../Cards/Card'
import Project from '../Projectoverview/Project'
import Team from '../Team/Team'
import './home.css'

const Dashboard = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Admin Dashboard</h2>
        <Card />
        <Project />
        <Team />
        <div className="additional-content">
          <p>
            Ara Web Technologies
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
