import React from 'react'
import { RiTimerLine } from 'react-icons/ri'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          Task-o-doro
        </a>
        <div className='nav__darkmode'>
          <button type='button' className='nav__darkmode-btn'>
            <RiTimerLine className='nav__darkmode-btn_moon' />
          </button>
        </div>
      </nav>
    </header>
  )
}
