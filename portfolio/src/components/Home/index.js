import React from 'react';
import './Home.css';
import Header from '../Header/index';
import Body from '../Body/index';

import Footer from '../Footer/index';

function Home() {
    return (
        <div className="home">
           <div>
               <Header />
               <Body />
               <Footer />
           </div>
        </div>
    )
}

export default Home