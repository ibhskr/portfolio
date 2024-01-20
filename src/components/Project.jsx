import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import "./Project.css"
function Project() {
  return (
    <div className='project content-padding'>
        <div className='project-section-title title-text'><p>Project</p></div>
        <div className='project-section'>
            <div className='project-item'>
                <img src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2021/02/10190751/Top-6-Project-Management-Trends-in-2021.png" alt="" />
                <h3>DevCom</h3>
                <p>Here, people can post about their projects, ask for help with coding issues, share tips and tricks, and engage in discussions related to software development. Whether you're a seasoned developer or just starting out, this is the perfect place to connect with like-minded individuals and expand your knowledge in the field. Feel free to ask any questions or share your own experiences – we're here to support each other! </p><button>visit   <BsArrowRight/></button>
            </div>
        </div>
        
    </div>
  )
}

export default Project