import React from 'react';
import "./pages.css";

var isClickEventListener = false;

const onClick = (e) => {
    
    if(window.location.pathname === '/Projects'){
        isClickEventListener = true;
        if(document.getElementById('popup1').classList.contains('overlayOn')){
            if(!(e.target.className.includes('card') || e.target.className.includes('container') || e.target.parentNode.className === 'container')){
                document.getElementById('popup1').className = 'overlayOff'
            }
        } else if(document.getElementById('popup1').classList.contains('overlayOff')){
            if(e.target.className.includes('card') || e.target.className.includes('container') || e.target.parentNode.className === 'container'){
                document.getElementById('popup1').className = 'overlayOn'
            }
        }
    } else if(isClickEventListener){
        document.removeEventListener('click',onClick)
        isClickEventListener = false
    }
}

const Projects = () => {
    document.title = "Projects";
    document.addEventListener('click', onClick)
    return (
        <div>
            <h1 className='title'>Projects</h1>
            
            <div className='outerCard'>
                <div className='card' >
                    <div className='container'>
                        <h3>Test1</h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>

            <div className='outerCard'>
                <div className='card'>
                    <div className='container'>
                        <h3>Test2</h3>
                        <p>Description Info & Stuff</p>
                    </div>
                </div>
            </div>

            <div id="popup1" className='overlayOff' >
                <div className='outerCard'>
                    <div id='test' className='card'>
                        <div className='container'>
                            <h3>Test</h3>
                            <p>More Detailed Description Info & Stuff</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    );
};

export default Projects;