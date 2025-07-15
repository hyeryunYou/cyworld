import React, { useState } from "react";
import "../styles/index.css";
import name from "../images/face-black-18dp.png"
import phone from "../images/call-24px.png"
import email from "../images/email-24px.png"
import instagram from "../images/grade-24px.png"
import setting from "../images/setting.png"
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Cyworld = () => {
    const navigate = useNavigate();
    const location = useLocation();  // 현재 경로

    const navItems = [
        { to: "/",       label: "홈" },
        { to: "/game",   label: "게임" },
        { to: "/jukebox",label: "쥬크박스" },
    ];

    return (
        <div className="background">
            <div className="wrapper">
                <div className="wrapper__left">
                    <div className="wrapper__left__header">
                        <div className="today">
                            <span>TODAY </span>
                            <span className="highlight-red">0</span>
                            <span> | TOTAL</span>
                            <span> 12345</span>
                        </div>
                    </div>
                    <div className="wrapper__left__body">
                        <div className="left__body__header">
                            <div className="left__body__header__grey"></div>
                            <div className="left__body__header__line"></div>
                        </div>
                        <div className="left__body__profile">
                            <div className="profile__detail">
                                <img src={name}/> 이름
                            </div>
                            <div className="profile__detail">
                                <img src={phone}/> Phone
                            </div>
                            <div className="profile__detail">
                                <img src={email}/> E-mail
                            </div>
                            <div className="profile__detail">
                                <img src={instagram}/>인스타그램
                            </div>
                        </div>
                        <div className="left__body__footer">
                            <div className="wrapper__feel">
                                <div className="feel__title">오늘의 기분</div>
                                <select className="feel__select">
                                    <option>기쁨😊</option>
                                    <option>슬픔😢</option>
                                    <option>짜증😣</option>
                                    <option>화남😠</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper__right">
                    <div className="wrapper__right__header">
                        <div className="right__header__title">사이좋은 사람들, 싸이월드</div>
                        <div className="right__header__setting">
                            사생활보호설정 <img src={setting}/></div>
                    </div>
                    <div className="wrapper__right__body">
                        {/* {ContentComponent} */}
                        <Outlet />
                        {/* 여기서 자식 컴포넌트가 렌더링됨 */}
                        {/* Outlet은 react-router-dom에서 제공되는 컴포넌트, 중첩된 라우트 구조를 구현할 때 쓰는 자리 표시자 역할 */}
                        {/* 원하는 구조가 "공통 레이아웃 + 바뀌는 콘텐츠"라면, Outlet은 꼭 필요하다! */}
                    </div>
                </div>
                <div className="navigation">
                    {navItems.map(({to, label}) => {
                        const isActive = location.pathname === to;
                        return (
                            <button
                                key={to}
                                // 공백 있음 → "navigation__Item active"
                                // 공백 없음 → "navigation__Itemactive"
                                // 공백 없이 "active"만 붙이면 navigation__Itemactive라는 낯선 클래스가 되어, 
                                // CSS 규칙(.navigation__Item.active)이 적용되지 않음
                                className={`navigation__Item${isActive ? " active" : ""}`}
                                onClick={()=> navigate(to)}
                            >{label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cyworld;



