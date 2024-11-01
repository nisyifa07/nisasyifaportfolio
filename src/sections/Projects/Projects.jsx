<<<<<<< HEAD
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

=======
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

>>>>>>> 67ff116ac0dd547a970971dabd59ad2a8a45f33b
export default Projects