import React from 'react';
import styles from './headerDownMenu.module.css';

class HeaderDownMenu extends React.Component {
    render() {
        console.log(styles)
        return (
            <div className={`${styles.m_tlist}`}>
                <div className={styles.inner}>
                    <ul className={styles.f_cb}>
                        <li className={styleMedia.lb}>
                            <a className={styles.itm_1} hidefocus="true">
                            <i  className={`${styles.icn} ${styles.icn_mb}`}></i>
                            <em>ssss</em>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderDownMenu;