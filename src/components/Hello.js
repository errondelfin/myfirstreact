import { useEffect, useState } from "react";
import helloService from "../services/helloService"

const Hello = () =>{

   const [hello, setHello] = useState([])
    useEffect(() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
                }
            )
            .catch(
                err => {
                    console.log("Something went wrong.")
                }
            )
        })
    return hello;

}

export default Hello;