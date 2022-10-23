import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { SliderGame } from './SliderGame';
import CallOfDuty from '../img/slider-call-of-duty-WWII.png';
import Destiny2 from '../img/slider-destiny2.png';
import Steep from '../img/slider-steep.png';
import ForzaMotorsport7 from '../img/slider-forza-motorsport7.png';

export const Games = () => {
    return (
        <section className="games">
            <div className="games__header">
                <button className="games__prev">
                    <MdOutlineArrowBackIos />
                </button>
                <h2 className="games__title">Exclusive games on XBOX</h2>
                <button className="games__next">
                    <MdOutlineArrowForwardIos />
                </button>
            </div>
            <div className="slider-games">
                <SliderGame
                    image={CallOfDuty}
                    title="Call of Duty: WWII"
                    desc="The C.O.D.E. Bravery Pack is now available in WWII"
                />
                <SliderGame
                    image={Destiny2}
                    title="Destiny 2"
                    desc=""
                />
                <SliderGame
                    image={Steep}
                    title="STEEP"
                    desc=""
                />
                <SliderGame
                    image={ForzaMotorsport7}
                    title="Forza Motorsport 7"
                    desc=""
                />
            </div>
            <button className="games__button">XBOX Store</button>
        </section>
    )
}