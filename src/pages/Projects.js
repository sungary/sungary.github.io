import React from 'react';
import "./pages.css";

const Projects = () => {
    document.title = "Projects";
    return (
        <div>

            <h1 className='title'>Projects</h1>
            
            <div className='outerCard'>
                <div className='card' onClick={function myfunc() {document.getElementById('popup1').className = 'overlayon'}}>
                    <div className='container'>
                        <h3><b>Test1</b></h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>

            <div className='outerCard'>
                <div className='card'>
                    <div className='container'>
                        <h3><b>Test2</b></h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>

            <div id="popup1" className='overlayoff' >
                <div className='outerCard' onMouseLeave={function myfunc() {document.getElementById('popup1').className = 'overlayoff'}}>
                    <div className='card'>
                        <div className='container'>
                            <h3><b>Test</b></h3>
                            <p>More Detailed Description Info & Stuff</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    );
};

export default Projects;