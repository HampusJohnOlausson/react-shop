import { Button } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import { Link } from 'react-router-dom';


const Start = () => {
    return (
      <main className="start-wrapper">
        <div className="text-container">
          <h2 className="company-name">NoiseHead</h2>
          <h1 className="hero-text">
            Quality<span>.</span>Style<span className="middle">.</span>Attitude
            <span>.</span>
          </h1>
          <h5 className="under-text">
            Quality headphones for your unique style
          </h5>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large" style={btnStyle}>
              Find your style
            </Button>
          </Link>
        </div>
        <div className="right-container">
          <div className="circle"></div>
        </div>
      </main>
    );
}

export default Start


const btnStyle: CSSProperties = {
  background: "#22eaaa",
  borderRadius: '.5rem',
  width: '15rem',
  height: '4rem',
  fontSize: '1.2rem',
  color: '#ffff',
  fontWeight: 'bold',

};
