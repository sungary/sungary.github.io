import data from "../../data.json";

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
const handleclick = (e) => {
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
        document.removeEventListener('click', handleclick)
        isClickEventListener = false
        
    }
}

export default handleclick;