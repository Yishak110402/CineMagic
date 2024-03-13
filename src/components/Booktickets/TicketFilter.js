import { useEffect, useState } from "react"
import styles from './TicketFilter.module.css'

export default function TicketFilter({nowShowing , setFilter}){
    
    return(
        <select className={styles.select} onChange={(e)=>(setFilter(e.target.value))} >
            <option value="All">All</option>
           {
               nowShowing.map((id)=>(
                   <TicketFilterOptions id={id}/>
                   ))
                }
          
        </select>
    )
}

function TicketFilterOptions({id}){
    
    const [option, setOption] = useState([])

    useEffect(function(){
        async function getOptions(){
            const res = await fetch(`https://www.omdbapi.com/?apikey=1f7f89f6&i=${id}`)
            const data = await res.json()
            setOption(data)
        }
        getOptions()
    },[])

    return(
        <>
        <option className={styles.option} value={option.Title}>{option==[] ? "Loading...":option.Title}</option>
        </>
    )
}