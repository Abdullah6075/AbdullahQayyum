import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Graphic Designer', 'UI/UX Designer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 80,
  });

  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Abdullah.</span><br />
            {text} 
            {/* <Cursor cursorColor='grey'/> */}
          </h1>
          <p className="home__description">
            Welcome to my digital atelier, where innovation meets intuition and pixels come to life. As a UI/UX designer, I navigate the intricate realm where aesthetics fuse seamlessly with functionality. I craft more than just interfaces; I sculpt experiences that resonate on a profound level.
          </p>
          <Link to='/about' className='button'>
            Explore My Story <span className='button__icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home;
