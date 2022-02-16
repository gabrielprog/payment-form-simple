import React from 'react'

import './style.css'

import brand from '../../assets/image/brand.svg'

export default function Header() {
    return (
        <div className="header">

            <div className="header__content">
                <h1 className="title">Let's pay.</h1>
                <h3 className="subtitle">It's easy.</h3>
            </div>

            <div className="header__card">
                <img src={brand} alt="" />

                <div className="card__info">
                    <p>CARD NUMBER</p>
                    <p>&nbsp;&nbsp;4325</p>
                </div>

                <div className="card__info-person">
                    <div className="name">
                        <p>Gabriel Santos</p>
                    </div>

                    <div className="validate">
                        <p>VALID THROUGH:</p>
                        <p>01/28</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
