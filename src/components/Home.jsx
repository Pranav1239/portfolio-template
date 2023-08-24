import React from 'react'
import Photo1 from '../Assests/Photo1.png'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <section>
        <div className="container-Main">
                <div className="fitem-Box-main">
                    <h1>LOR<span>EM</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error numquam <span>iure vero delectus molestias eos quisquam odio possimus nam minus harum</span> libero, quasi recusandae nisi minima quas explicabo iste est.</p>
                </div>
                <div className="fitem-Box-main">
                    <img src={Photo1} alt=""/>
                </div>
        </div>
        <div id="height-section-1"></div>
    </section>
    </>
  )
}

export default Home