import React from 'react';
import styles from './styles.module.css';

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    blowPic(event) {
        console.log(event.target)
    }

    shrinkPic(event) {
        console.log(event.target);
    }

    render() {
        return (
            <a href={this.props.project.link} target="_blank" className={styles.projectLink}>
                <div className={styles.projectContainer}>
                    <div className={styles.project} style={{'background': `url('${this.props.project.img}') center/cover no-repeat`}}></div>
                    {   
                        this.props.project.live ? <div className={styles.live}><div className={styles.circle}></div>Live</div> : null
                    }

                    <div className={styles.description} onMouseOver={this.blowPic} onMouseOut={this.shrinkPic}>
                        <h2>{this.props.project.name}</h2>
                        <div className={styles.tools}>
                            {this.props.project.tools.map((item) => {
                                return <div className={styles.tool}>{item}</div>
                            })}
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default ProjectTile;