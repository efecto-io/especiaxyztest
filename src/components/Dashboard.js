import React from 'react'
import ProjectList from './ProjectList';
import ProjectStatus from './ProjectStatus';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ProjectList />
        <ProjectStatus />
      </div>
    </div>
  )
}

export default Dashboard
