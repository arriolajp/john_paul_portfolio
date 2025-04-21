import React, {useState, useEffect} from 'react';
import "./Header.css";

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <p>Current time: {time.toLocaleTimeString()}</p>
  );
};

const Header = ()  =>{
  const [backColor, setBackColor] = useState('#FE1CA7'); 

  const changeBackground = () => {
    const colors = ['#3C28FC', '#F71F1F', '#6a4c93', '#ffca3a', '#FE1CA7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackColor(randomColor);
    
  };

  return (
    <header>
      <div className="top-bar">
          <p>
            THIS IS FUN TEXT FOR THE WEBSITE WELCOME TO MY PORTFOLIO THIS IS FUN TEXT FOR THE WEBSITE CHECK IT OUT
          </p>
      </div>
      <div className="name">
          <h1>JOHN PAUL ARRIOLA</h1>
      </div>
      <div className="background"
      onClick={changeBackground}
      style={{ backgroundColor: backColor }}>
        <div className="intro1">
            <p>My name is JP! </p>
        </div>
        <div className="intro2">
            <p>I'm an aspiring software developer and student exploring new creations, art, and experiences. I'd love to create your next website or build your next idea.</p>
        </div>    
        <div className="time"><TimeDisplay/></div>
      </div>
    
    </header>
  )
}

export default Header;