import React from 'react';
import styles from './headerDownMenu.css';

class HeaderDownMenu extends React.Component {
    render() {
        console.log(styles)
        return (
            <div className={styles.m_tlist}>
                <p>1</p>
            </div>
        )
    }
}

export default HeaderDownMenu;