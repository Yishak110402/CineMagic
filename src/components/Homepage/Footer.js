import styles from './Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <h2>CineMagic</h2>
            <FooterNav/>
        </div>
    )
}

function FooterNav(){
    return(
        <nav>
            <ul>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}