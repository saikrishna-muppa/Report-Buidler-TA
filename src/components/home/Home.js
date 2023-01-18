import React from 'react'
import DragDrop from "../DragDrop"
import MenuOptions from '../menuOptions/MenuOptions'
import "./Home.scss"
const Home = () => {
    return (
        <>
            <div className='container'> 

              <div className='sub-container'>
              <div className='container-menu-left'><MenuOptions/></div>
                <div className='container-menu-right'> <DragDrop/></div>
              </div>

            </div>

        </>

    )
}

export default Home