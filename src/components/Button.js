import React from "react"

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
        addCount = () =>{
        this.setState(
                {
                    count : this.state.count + 1
                }
                )
 
    }
  
    render(){
        return(
               <div>
            <button onClick ={this.addCount}>click me kung pogi ka rin!!! </button>
            <p>counting pogi points = {this.state.count}</p>
            </div>
        )
    }
}
export default Button
