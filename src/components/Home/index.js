import {Component} from "react"
import "./index.css"

class Home extends Component{
    state={count:10}
    onIncrement = () =>{
        this.setState((prev)=>({count:prev.count+1}))
    }

    onDecrement=()=>{
        this.setState((prev)=>({count:prev.count-1}))
    }

    render(){
        const {count}=this.state
    return(
            <div className="container">
                <h1 className="heading">Counter</h1>
                <p className="count">{count}</p>
                <div>
                    <button className="button" onClick={this.onIncrement}>Increase count</button>
                    <button className="button" onClick={this.onDecrement}>Decrease count</button>
                </div>
           </div>)

    }
}
export default Home