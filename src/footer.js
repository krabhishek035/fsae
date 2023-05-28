import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <img className='logo3' src='logo.png' />
            <h1 className='add'>Address :</h1>
            <h1 className='address'>
                I.C. Engine Lab<br />
                Sardar Vallabhbhai<br />
                National Institute of Technology<br />
                Surat, Gujarat-395007
            </h1>
            <h1 className='con'>Contact us :</h1>
            <h1 className='contact'>
                Captain : Harsh Patel<br />
                Contact number : xxxxx9090</h1>
            <h1 className='add'></h1>
            <div className='grayBox'></div>
            <div className='insta'></div>
            <div className='youtube'></div>
            <div className='linkedin'></div>
            <div className='twitter'></div>
        </div>
    )
}
