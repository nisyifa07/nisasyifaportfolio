import styles from './Projects.module.css';
import dictionary from '../../assets/1.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard src={dictionary} link="https://www.instagram.com" h3="E-qtishad Dictionary" p="Dictionary App"/>
       <div className={styles.projectsContainer}>
       <ProjectCard src={dictionary} link="https://www.instagram.com" h3="E-qtishad Dictionary" p="Dictionary App"/>
      </div>
      </div>
      <div className={styles.projectsContainer}>
       <ProjectCard src={dictionary} link="https://www.instagram.com" h3="E-qtishad Dictionary" p="Dictionary App"/>
       <div className={styles.projectsContainer}>
       <ProjectCard src={dictionary} link="https://www.instagram.com" h3="E-qtishad Dictionary" p="Dictionary App"/>
      </div>
      </div>
    </section>
  )
}

export default Projects