import BookTicketsForm from "../components/Booktickets/BookTicketsForm";
import Hero from "../components/Booktickets/Hero";

export default function BookTickets({nowShowing}){
    return(
        <>
        <Hero/>
        <BookTicketsForm nowShowing={nowShowing}/>
        </>
        )
}