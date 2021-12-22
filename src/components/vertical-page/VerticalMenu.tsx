import React from 'react'

const VerticalMenu = ()=>{
    return (
        <div className='vertical--menu'>
            <div className='circle -info hidden md:block'>
                <div className='info--icon icon'/>
            </div>
            <h2 className='header--h2 uppercase -small -black mb-16 mt-4 md:mt-2'>Portfolio</h2>
            <div className='circle -menu'>
                <div className='menu--icon icon'/>
            </div>
        </div>
    )
}

export default VerticalMenu