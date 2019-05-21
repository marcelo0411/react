import React from 'react';
import './header.css';

const HeaderTitleItem = ['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端']

class HeaderNav extends React.Component {
    render() {
        const listItems = HeaderTitleItem.map((number) =>
            <li key={number}>
                <span>
                    <a hidefocus="true" className="z-slt" href="/#">
                        <em>{number}</em>
                        <sub className="cor">&nbsp</sub>
                    </a>
                </span>
            </li>
        );
        return (
            <ul className="m-nav j-tflag" >{listItems}</ul>
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div className="music-top m-top">
                <div className="content f-cb">
                    <h1 className="music-logo logo">
                        <a href="/#" hidefocus="true">网易云音乐</a>
                    </h1>
                    <HeaderNav />
                </div>
            </div>
        )
    }
}

export default Header;