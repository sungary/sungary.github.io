import React from 'react';
import "./pages.css";
import data from "../data.json";
import handleclick from '../components/functions/handleclick';

const Projects = () => {
    document.title = "Projects";
    document.addEventListener('click', handleclick)

    return (
        <div>
            <h1 className='title'>Projects</h1>

            {/* This is where the cards are created */}
            {data.Projects.map((card) => (
                <div className='outerCard' key={card.id}>
                    <div className='card' datakey={card.id}>
                        <div className='container' datakey={card.id}>
                            <h3 id="title" className="disableSelect" datakey={card.id}>{card.title}</h3>
                            <p id="sdescription" className="disableSelect" datakey={card.id}>{card.sdescription}</p>
                        </div>
                    </div>
                </div> 
            ))}

            {/* This is where the popup/overlay is shown which a card is clicked on */}
            <div id="popup" className='overlayOff' >
                <div className='outerCard'>
                    <div id='test' className='card'>
                        <div className='container'>
                            <h3 id="h3Value">Default Title</h3>
                            <p id="pValue">Default Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Projects;