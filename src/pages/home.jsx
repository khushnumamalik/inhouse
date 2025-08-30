import React from 'react'
import Card from '../Cards/Card'
import Project from '../Projectoverview/Project'
import Team from '../Team/Team'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Dashboard Overview</h2>
        <Card />
        <Project />
        <Team />
        <div className="additional-content">
          <p>Welcome to your CRM Dashboard. Here you can track your projects, tasks, and overall progress.</p>
        </div>
      </div>
    </div>
  )
}

export default Home