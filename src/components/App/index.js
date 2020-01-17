import React from 'react';
import IntroPanel from '../IntroPanel'
import ProjectContainer from '../ProjectContainer';
import styles from './styles.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <IntroPanel/>
                <ProjectContainer />
            </div>
        )
    }
}

export default App;