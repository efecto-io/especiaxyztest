import React from 'react'

const ProjectList = () => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">
          Featured
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <button className="btn btn-primary">Nuevo proyecto</button>
      </div>
    </div>
  )
}

export default ProjectList
