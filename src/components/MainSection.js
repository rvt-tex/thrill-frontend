import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            
        <h1>WELCOME TO JA</h1>
        <p>Party Capital of the World</p>

        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >LOG IN
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('testing')}
            >WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>

        </div>
    )
}

export default MainSection
