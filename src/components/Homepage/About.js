import styles from './About.module.css'

export default function About(){

    return(
        <div className={styles.about}>
            <AboutText/>
            <img src='./assets/aboutimg.jpg'/>
        </div>
    )
}

function AboutText(){
    return(
        <div className={styles.aboutText}>
            <h1>Experience the magic of CineMagic</h1>
            <p>At CineMagic we offer a unique cinema experience with comfortable seating and state of the art audiovisuals. Immerse yourself in the magic of the big screen and enjoy the latest blockbuster movies in stunning clarity and sound</p>
            <div className={styles.details}>
                <div>
                    <h3> Comfortable</h3>
                    <p>Relax in our spacious and plush seats designed for ultimate comfort and enjoyment</p>
                </div>
                <div>
                    <h3>Immersive</h3>
                    <p>Experience movies like never before with our state-of-the-art audiovisual technology</p>
                </div>
            </div>
        </div>
    )
}