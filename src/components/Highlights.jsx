import React from 'react';
import { FaXbox } from 'react-icons/fa';
import XboxOneX from '../img/xbox-one-x.png';
import Mixer from '../img/mixer.png';
import GamesOfGold from '../img/games-with-gold.png';
import { HighlightsNews } from './HighlightsNews';

export const Highlights = () => {
    return (
        <section className="highlights">
            <div className="container">
                <div className="highlights__inner">
                    <div className="highlights__logo">
                        <FaXbox />
                    </div>
                    <h2 className="highlights__title">The best value</h2>
                    <p className="highlights__desc">in games and entertainment</p>
                    <div className="feed-highlights">
                        <HighlightsNews
                            topic="XBOX ONE X"
                            title="Faster ProcessingSmoother Gameplay"
                            image={XboxOneX}
                            button="Explore Consoles & Accessories"
                        />
                        <HighlightsNews
                            topic="mixer Streaming"
                            title="The Next GenerationOf Life Game Streaming"
                            image={Mixer}
                            button="Start Watching mixer"
                        />
                        <HighlightsNews
                            topic="Free Games Every Month"
                            title="Get up to $700 in free games"
                            image={GamesOfGold}
                            button="Get Free Games"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}