import { useState, useContext, useEffect } from "react";
import "./Card.css";
import { LearnContext } from "../../context/LearnContext";

const Card = ({ collection_id }) => {
    const { cardState, flipCard, loadCard } = useContext(LearnContext);
    useEffect(() => {
        loadCard(collection_id);
    }, []);
    console.log(cardState);
    return cardState.currentCard !== undefined ? (
        <div className="container">
            <div
                className={cardState.isFlip ? "card flipCard" : "card"}
                onClick={flipCard}
            >
                <div className="front">
                    {/* {cardInfo.img && <div className='img'></div>} */}
                    <div className="text">
                        <p>{cardState.currentCard.word}</p>
                    </div>
                </div>
                <div className="back">
                    <p className="vocabulary">{cardState.currentCard.word}</p>
                    <p className="wordType">
                        ({cardState.currentCard.word_type})
                    </p>
                    <p className="pronuciation">
                        {cardState.currentCard.pronunciation}
                    </p>
                    <p className="meaning">{cardState.currentCard.mean}</p>
                    <p className="example">{cardState.currentCard.example}</p>
                </div>
            </div>
        </div>
    ) : (
        <div>Bạn đã học hết flashcard</div>
    );
};

export default Card;
