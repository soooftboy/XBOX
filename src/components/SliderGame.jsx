import React from 'react';

export const SliderGame = (props) => {
    return (
        <div className="slider-games__game">
            <img src={props.image} alt="Image" className="slider-games__image"/>
            <div className="slider-games__inner">
                <div className="slider-games__text">
                    <p className="slider-games__title">{props.title}</p>
                    <h3 className="slider-games__desc">{props.desc}</h3>
                </div>
                <button className="slider-games__button">See Details</button>
            </div>
        </div>
    )
}