import React from "react";

class Table extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        headers: Object.keys(this.props.info[0])
      }
    }  
  render() {
    return (
            <table>
              <thead>
              <tr>
                { this.state.headers.map((header, index)=>{
                 return <th key={index}>{header}</th> })
                }
              </tr>
              </thead>
              <tbody>
                  { this.props.info.map((object, i)=>{   
                    return <tr key={i}>
                      {this.state.headers.map((header, j)=>
                        <td key={j}>{object[header]}</td>)}
                      </tr>                    
                    })
                  }
              </tbody>
            </table> 
           )
  }
}


export default Table;

