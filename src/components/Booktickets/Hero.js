import styles from './Hero.module.css'

export default function Hero(){
    return (
        <div className={styles.heroContainer}>
           <div>
            <h4>Discover</h4>
            <h1>Book your tickets</h1>            
           </div>
           <div>
            <p>Experience the latest movies at CineMagic. Book your tickets online and enjoy a seamless movie watching experience</p>
           </div>
        </div>
    )
}