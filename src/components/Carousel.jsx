import React from 'react';
import StarWars from '../img/star-wars-battlefront-II-combat.png';
import CallOfDuty from '../img/call-of-duty-WWII.png';
import SeaOfThieves from '../img/sea-of-thieves.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

export const Carousel = () => {
    return (
        <section className="carousel">
            <div className="game-carousel">
                <div className="container">
                    <div className="game-carousel__inner">
                        <h2 className="game-carousel__title">Star Wars</h2>
                        <p className="game-carousel__chapter">Battlefront II</p>
                        <div className="game-carousel__buttons">
                            <button className="game-carousel__button game-carousel__watch-trailer">Watch Trailer</button>
                            <button className="game-carousel__button game-carousel__explore-games">Explore Games</button>
                        </div>
                    </div>
                </div>
                <img className="game-carousel__image" src={StarWars} alt="Star Wars"/>
            </div>

            <button className="carousel__prev">
                <MdOutlineArrowBackIos />
            </button>
            <button className="carousel__next">
                <MdOutlineArrowForwardIos />
            </button>
            <div className="carousel__dots">
                <button className="carousel__dot carousel__dot_active">
                </button>
                <button className="carousel__dot">
                </button>
                <button className="carousel__dot">
                </button>
            </div>
        </section>
    )
}