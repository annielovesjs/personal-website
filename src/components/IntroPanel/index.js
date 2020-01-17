import React from 'react';
import SocialMedia from '../SocialMedia';
import IntroText from '../IntroText';
import styles from './styles.module.css';
import { INTRO, INTRO_TYPE_TEXT, SOCIAL} from '../../types';

class IntroPanel extends React.Component {
    render() {
        return (
            <div className={styles.row}>
                <div className={styles.sideBar}>
                    <div className={styles.dpBox}>
                        <div className={styles.annieDP}></div>
                    </div>
                    <IntroText 
                        intro={INTRO}
                        introArray={INTRO_TYPE_TEXT}
                        social={SOCIAL}
                    />
                    <SocialMedia />
                </div>
            </div>
        )
    }
}

export default IntroPanel;