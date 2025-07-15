// 1. 단어 입력하고 버튼 누르면 -> onClick
// 2. input 태그의 값을 읽어온다
// 3. 제시어의 끝 글자와 입력값의 첫 글자를 비교한다 -> 1. 제시어의 끝 글자를 변수에 할당 2. 입력값의 첫 글자를 변수에 할당 3. 비교 
// 4. 제시어의 끝 글자와 입력값의 첫 글자가 같으면 결과란에
// "정답입니다!"를 푯하고, 제시어를 입력값으로 변경한다 -> 조건문
// 5. 제시어의 끝 글자와 입력값이 첫 글자가 다르면 결과란에 
// "땡!"을 표시하고, 제시어는 변경하지 않는다 -> 조건문

import React, {useState} from "react";
import '../styles/game.css';
import wordImg from '../images/word.png'
import Lotto from '../images/lotto.png'

const Game = () => {
    const [word, setWord] = useState("코드캠프");
    const [myWord, setMyWord] = useState("");
    const [result, setResult] = useState("결과!");

    const wordGame = () => {
        const lastWord = word[word.length-1];
        const startWord = myWord[0];

        if (lastWord === startWord) {
            setResult("정답입니다!");
            setWord(myWord);
            setMyWord("");
        } else {
            setResult("땡!");
            setMyWord("");
        }
    };

    return (
        <div className="game__wrapper">
            <div className="game__wrapper__header">
                <div className="game__header__title">
                    <div className="game__title">GAME</div>
                    <div className="game__subtitle">TODAY CHOICE</div>
                </div>
                <div className="divideLine"></div>
            </div>
            <div className="game__container">
                <img className="word__game" src={wordImg} alt="끝말잇기" />
                <div className="game__container__title">끝말잇기</div>
                <div className="game__container__subtitle">
                    제시어 : <span>{word}</span>
                </div>
                <div className="word__input">
                    <input
                        className="textbox"
                        value={myWord}
                        onChange={(e)=>setMyWord(e.target.value)}
                        placeholder="단어를 입력하세요."
                    />
                    <button 
                        className="search"
                        onClick={wordGame}
                    >검색</button>
                </div>
                <div className="word__result">{result}</div>
            </div>
            <div className="game__container">
                <img className="lotto__game" src={Lotto} alt="로또" />
                <div className="game__container__title">LOTTO</div>
                <div className="game__container__subtitle">버튼을 누르세요</div>
                <div className="game__lotto__number">
                    <span>3</span>
                    <span>5</span>
                    <span>10</span>
                    <span>24</span>
                    <span>20</span>
                    <span>34</span>
                </div>
                <button className="game__lotto__button">Button</button>
            </div>
        </div>
    )
}

export default Game;