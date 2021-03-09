import { Button } from '@material-ui/core'
import React from 'react'
import { startBtn } from '../Sass/Start.scss'

const Start = () => {
    return (
      <main className="start-wrapper">
        <div className="text-container">
          <h1 className="hero-text">This is the start page</h1>
          <h5 className="under-text">Quality clothes with style bla bla</h5>
          <Button variant="contained" size="large" style={startBtn} >Button</Button>
        </div>
      </main>
    );
}

export default Start
