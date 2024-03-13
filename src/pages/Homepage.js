import About from "../components/Homepage/About";
import BookNow from "../components/Homepage/BookNow";
import Contact from "../components/Homepage/Contact";
import Features from "../components/Homepage/Features";
import Footer from "../components/Homepage/Footer";
import Hero from "../components/Homepage/Hero";

export default function Homepage(){
    return(
        <main>
           <Hero/>
           <About/>
           <Features/>
           <BookNow/>
           <Contact/>
           <Footer/>
        </main>
    )
}