import { useEffect, useState } from "react";
import helloService from "../services/helloService"


//function - arrow function
// function Hello() - normal function "stateless" 
// react - reactive
const Hello = () =>{

    //function hooks
    const [hello, setHello] =  useState("walang api. pasensya kana godbless!")

    //hooks
    useEffect(() => {
        helloService.getHello() //promises  
        .then(
        response => {
            setHello(response.data);
        }
        )
        .catch(
            err => {
                console.log("something went wrong")
            }
        )
    })

    return hello;
}

export default Hello;