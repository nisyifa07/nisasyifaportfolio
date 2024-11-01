import styles from '../Skills/SkillStyles.module.css';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/javascript.png';
import reactIcon from '../../assets/react.png';
import phpIcon from '../../assets/php.png';
import bootstrapIcon from '../../assets/bootstrap.png';
import SkillList from '../../common/SkillList';

export default function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML"/>
        <SkillList src={cssIcon} skill="CSS"/>
        <SkillList src={jsIcon} skill="JavaScript"/>
        <SkillList src={reactIcon} skill="ReactJS"/>
        <SkillList src={phpIcon} skill="PHP"/>
        <SkillList src={bootstrapIcon} skill="Bootstrap CSS"/>
        <hr /></div>
        
    </section>
  )
}
