import FAQs from "../components/Nowshowing/FAQs";
import Hero from "../components/Nowshowing/Hero";
import ShowingList from "../components/Nowshowing/ShowingList";

export default function NowShowing({nowShowing}){
    return (
        <main>
            <Hero/>
            <ShowingList nowShowing={nowShowing} />
            <FAQs/>
        </main>
    )
}