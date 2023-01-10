import React from 'react';
import "./pages.css";
import data from "../data.json";

var isClickEventListener = false;

// gets the data/information of the card that is clicked on
function getData(e) {
    if(e.target.className.includes('card') || e.target.className.includes('container')){
        document.getElementById('h3Value').textContent = e.target.querySelector('h3').innerText
        document.getElementById('pValue').textContent = data.Projects[e.target.getAttribute('datakey')].ldescription
    } else if(e.target.parentNode.className === 'container'){
        document.getElementById('h3Value').textContent = e.target.parentNode.querySelector('h3').innerText
        document.getElementById('pValue').textContent = data.Projects[e.target.getAttribute('datakey')].ldescription
    }

}

// handles what happens when there is a click on the page. If it is a card, then it will call getData() and display the popup/overlay with its relevant data
const onClick = (e) => {
    if(window.location.pathname === '/Projects'){
        isClickEventListener = true;
        if(document.getElementById('popup').classList.contains('overlayOn')){
            if(!(e.target.className.includes('card') || e.target.className.includes('container') || e.target.parentNode.className === 'container')){
                document.getElementById('popup').className = 'overlayOff'
            }
        } else if(document.getElementById('popup').classList.contains('overlayOff')){
            if(e.target.className.includes('card') || e.target.className.includes('container') || e.target.parentNode.className === 'container'){
                getData(e)
                document.getElementById('popup').className = 'overlayOn'
            }
        }
    } else if(isClickEventListener){
        document.removeEventListener('click', onClick)
        isClickEventListener = false
    }
}

const Projects = () => {
    document.title = "Projects";
    document.addEventListener('click', onClick)

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