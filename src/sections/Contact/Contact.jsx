import styles from '../Contact/ContactStyles.module.css';
function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>Name
                </label><input type="text" id='name' placeholder='Name' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Email
                </label><input type="email" id='email' placeholder='Email' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Message
                </label>
                <textarea type="message" id='message' placeholder='Message' required>
                </textarea>
            </div>
            <input className='hover-btn' type="submit" value="Submit"/>
        </form>
    
    </section>
  )
}
export default Contact