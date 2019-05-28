/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './headerDownMenu.module.css';

const menuList = [
    { name: '手机号登录', key: 'mobile' },
    { name: '微信登录', key: 'wechat' },
    { name: 'QQ登录', key: 'qq' },
    { name: '新浪微博登录', key: 'weibo' },
    { name: '网易邮箱账号登录', key: 'email' }
]

class HeaderDownMenuLi extends React.Component {
    constructor(props) {
        super(props);
        this.openLoginPop = this.openLoginPop.bind(this);
    }
    openLoginPop() {
        console.log('open login')
    }
    render() {
        let classx;
        switch (this.props.positionname) {
            case 'mobile':
                classx = styles.icn_mobile;
                break;
            case 'wechat':
                classx = styles.icn_wechat;
                break;
            case 'qq':
                classx = styles.icn_qq;
                break;
            case 'weibo':
                classx = styles.icn_weibo;
                break;
            case 'email':
                classx = styles.icn_email;
                break;
            default:
                classx = '';
                break
        }

        return (
            <li className={styles.lb}>
                <a className={styles.itm_1} hidefocus="true" onClick={this.openLoginPop}>
                    <i className={`${classx} ${styles.icn}`}></i>
                    <em>{this.props.item}</em>
                </a>
            </li>
        )
    }
}

class HeaderDownMenu extends React.Component {
    render() {
        const menuItems = menuList.map((key) =>
            <HeaderDownMenuLi item={key.name} key={key.key} positionname={key.key} />
        );
        return (
            <div className={`${styles.m_tlist}`} style={{ display: this.props.loginMenu ? 'block' : 'none' }}>
                <div className={styles.inner}>
                    <ul className={styles.f_cb}>{menuItems}</ul>
                </div>
            </div>
        )
    }
}

export default HeaderDownMenu;