import React from 'react';
import styles from './styles.module.css';
import TxtType from '../TxtType';

class IntroText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.type();
    }

    type() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            console.log(elements[i]);
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        let css = document.createElement("style");
        css.type = 'text/css';
        css.innerHTML = ".typewrite > .wrap {border-right: 0.08em solid black}";
        document.body.appendChild(css);
    }

    render() {
        return (
            <div className={styles.intro}>
                <h2>{this.props.intro}</h2>
                <h4 className="typewrite" data-period="2000" data-type='["I help create fun experiences", "I travel the world in search of good food"]'></h4>
                <div className={styles.line}></div>
                <p>{this.props.social}</p>
            </div>
        )
    }
} 

export default IntroText;
