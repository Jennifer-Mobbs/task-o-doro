import React from 'react'
import { Article } from './Article'


export const Main = () => {
  return (
    <main className='main container'>
      <h1 className='main__title'></h1>
      <p className='main__text'></p>
      <Article />
    </main>
  )
}
