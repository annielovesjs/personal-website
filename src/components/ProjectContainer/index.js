import React from 'react';
import styles from './styles.module.css';
import {PROJECT_OBJ} from '../../types'
import ProjectTile from '../ProjectTile';

const ProjectContainer = () => {
    return (
        <div className={styles.projectContainer}>
            {PROJECT_OBJ.map((projectObj) => {
                return <ProjectTile project={projectObj}/>
            })}
        </div>
    )
}

export default ProjectContainer;