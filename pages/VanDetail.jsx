import React from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const params = useParams()
    const id=params.id
   
   React.useEffect(function(){
   fetch(`/api/vans/${id}`)
   .then(res => res.json())
   .then(data => console.log(data))
    
    
   },[params.id])  
   
    
    
    
    return <h1>{params.id}Van detail page goes here</h1>
}