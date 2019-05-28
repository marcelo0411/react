import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import HeaderPopUp from './header-popup/headerPopUp';
import HeaderDownMenu from './header-down-menu/headerDownMenu';

const HeaderTitleItem = [
    { name: '发现音乐', key: '' },
    { name: '我的音乐', key: 'my' },
    { name: '朋友', key: 'friend' },
    { name: '商城', key: 'shop' },
    { name: '音乐人', key: 'musician' },
    { name: '下载客户端', key: 'download' }
];

class HeaderNavLi extends React.Component {
    constructor(props) {
        super(props);
        this.headerLiClick = this.headerLiClick.bind(this);
    }

    headerLiClick(event) {
        console.log(event.target.classList)
    }

    render() {
        if (this.props.item.key === 'download') {
            return (
                <li className="lst">
                    <span>
                        <Link hidefocus="true" onClick={(e) => this.headerLiClick(e)} className="z-slt" to={`/${this.props.link}`} >
                            <em>{this.props.item}</em>
                            <sub className="cor">&nbsp;</sub>
                        </Link>
                    </span>
                    <sup className="hot">&nbsp;</sup>
                </li>
            )
        } else {
            return (
                <li>
                    <span>
                        <Link hidefocus="true" to={`/${this.props.link}`} >
                            <em>{this.props.item}</em>
                            <sub className="cor">&nbsp;</sub>
                        </Link>
                    </span>
                </li>
            )
        }

    }
}

class HeaderNav extends React.Component {
    render() {
        const listItems = HeaderTitleItem.map((number) =>
            <HeaderNavLi item={number.name} key={number.key} link={number.key} />
        );
        return (
            <ul className="m-nav j-tflag" >{listItems}</ul>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchLabelShow: true,
            loginMenu: false
        }
        this.headerPopUpOver = this.headerPopUpOver.bind(this);
        this.headerPopUpLeave = this.headerPopUpLeave.bind(this);
        this.searchInputFocus = this.searchInputFocus.bind(this);
        this.searchInputBlur = this.searchInputBlur.bind(this);
        this.searchInputShow = this.searchInputShow.bind(this);
    }

    headerPopUpOver() {
        this.setState({
            loginMenu: true
        });
    }

    headerPopUpLeave() {
        this.setState({
            loginMenu: false
        });
    }

    searchInputShow() {
        this.setState({
            searchLabelShow: false
        });
        document.getElementById('search_input').focus();
    }

    //搜索框获取焦点
    searchInputFocus() {
        this.setState({
            searchLabelShow: false
        })
    }

    //搜索框失去焦点
    searchInputBlur(event) {
        this.setState({
            searchLabelShow: event.target.value.length > 0 ? false : true
        })

    }

    render() {
        return (
            <div>
                <div className="music-top m-top">
                    <div className="content f-cb">
                        <h1 className="music-logo logo">
                            <a href="/#" hidefocus="true">网易云音乐</a>
                        </h1>
                        <HeaderNav />
                        <div className="m-tophead f-pr j-tflag" onMouseOver={this.headerPopUpOver} onMouseLeave={this.headerPopUpLeave}>
                            <a className="link s-fc3" hidefocus="true">登录</a>
                            <HeaderDownMenu loginMenu={this.state.loginMenu} />
                        </div>
                        <a className="m-topvd f-pr m-creator-center">创作者中心</a>
                        <div className="m-srch f-pr j-suggest" id="g_search">
                            <div className="srchbg">
                                <span className="parent">
                                    <input type="text" name="search" className="txt j-flag" id="search_input"
                                        onFocus={this.searchInputFocus}
                                        onBlur={(e) => this.searchInputBlur(e)} />
                                    <label className="ph j-flag" id="auto-id"
                                        onClick={this.searchInputShow}
                                        style={{ display: this.state.searchLabelShow ? "block" : "none" }}>音乐/视频/电台/用户</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-subnav m-subnav-up f-pr j-tflag"></div>
                <HeaderPopUp />
            </div>
        )
    }
}

export default Header;