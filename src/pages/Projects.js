import React from 'react';
import "./pages.css";

const Projects = () => {
    document.title = "Projects";
    return (
        <div>
            <h1 className='title'>Projects</h1>
            
            <div className='outerCard'>
                <div className='card'>
                    <div className='container'>
                        <h3><b>Test1</b></h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>
            
            <div className='outerCard'>
                <div className='card'>
                    <div className='container'>
                        <h3><b>Test1</b></h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;