import React from 'react'
import './project.css'
import projectData  from './projectData'

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recemt Work</h5>
      <h2>Projects</h2>
      <div className="container porject_container">

      {projectData.map(({id,image,title,github,demo})=>{
        return(
          <article key={id}  className='project_item'>
          <div className="project_item-img">
            <img src={image} />    
          </div>
          <h3>{title}</h3>
          <div className='project_item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        )
      })}
      </div>
    </section>
  )
}

export default Project



// alt="Project Image"
//rel="noopener noreferrer"