import React from 'react';

export const HighlightsNews = (props) => {
    return (
        <div className="feed-highlights__news">
            <img src={props.image} alt="Image" className="feed-highlights__image"/>
            <div className="feed-highlights__inner">
                <div className="feed-highlights__text">
                    <p className="feed-highlights__topic">{props.topic}</p>
                    <h3 className="feed-highlights__title">{props.title}</h3>
                </div>
                <button className="feed-highlights__button">{props.button}</button>
            </div>
        </div>
    )
}