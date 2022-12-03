import React from 'react';
import "./pages.css";

const Home = () => {
    document.title = "Home | Gary Sun";
    return (
        <div>
            <h1 className='title'>Portfolio</h1>
            <h2 className='ps'> 
                Work In Progress | personal website where I will list all of my past/current projects
            </h2>
        </div>
    );
};

export default Home;