import React, { Component } from 'react'
import './History.css'

class History extends Component{

    constructor(){
        super();
        this.state = {
          items:[]
        };
    }

    componentDidMount(){

        this.setState({
            items: JSON.parse(localStorage.getItem("Histories"))
        })
    }

    render(){
        return(
            <div className="History">
               <table className="table table-striped table-dark">
                   <thead>
                        <th>Operations</th>
                        <th>Results</th>
                   </thead>
                   <tbody>
                   {this.state.items.map((item) => (
                        <tr>
                        <td>{ item.Operation }</td>
                        <td>{ item.Result }</td>
                        </tr>
                   ))}
                   </tbody>
                </table>             
            </div>
        )
    }
}

export default History;