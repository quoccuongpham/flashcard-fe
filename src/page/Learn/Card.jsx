import { useState, useContext } from "react";
import "./Card.css";
import { LearnContext } from "../../context/LearnContext";
const Card = ({ flashcard_info }) => {
    const { cardState, flipCard } = useContext(LearnContext);
    console.log(cardState);
    return flashcard_info ? (
        <div className="container">
            <div
                className={cardState.isFlip ? "card flipCard" : "card"}
                onClick={flipCard}
            >
                <div className="front">
                    {/* {cardInfo.img && <div className='img'></div>} */}
                    <div className="text">
                        <p>{flashcard_info.word}</p>
                    </div>
                </div>
                <div className="back">
                    <p className="vocabulary">{flashcard_info.word}</p>
                    <p className="wordType">{flashcard_info.word_type}</p>
                    <p className="pronuciation">
                        {flashcard_info.pronunciation}
                    </p>
                    <p className="meaning">{flashcard_info.mean}</p>
                    <p className="example">{flashcard_info.example}</p>
                </div>
            </div>
        </div>
    ) : (
        <p>loading</p>
    );
};

export default Card;
