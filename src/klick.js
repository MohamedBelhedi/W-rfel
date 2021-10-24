import React,{Component} from 'react';


class Klick extends Component{
    super(props){
    this.state={klickzahl:0};
    this.klickzahl=this.klickzahl.bind(this);
}
klickzahl(){
    this.setState({klickzahl:this.state.klickzahl+1});

// }
// klickzahldoppel(){
//     this.setState(
//         state=> {
//             return { klickzahl:state.klickzahl+1};
//     });
//     this.setState(
//         state=> {
//             return { klickzahl:state.klickzahl+1};
//     });
//     this.setState(
//         state=> {
//             return { klickzahl:state.klickzahl+1};
//     });
// callback function
// zusammenZählen(curState){
//     return{klickzahl:curState.klickzahl +1};
    
// }

// klickzahldoppel(curState){
//     this.setState(zusammenZählen);
//     this.setState(zusammenZählen);
//     this.setState(zusammenZählen);

// // sauberer Code
// }
}
    render(){
        return(
            
            
            
            <div>
                <h1>klickzahl:{this.state.klickzahl}</h1>
                
                <button className="knopf" onClick={this.klickzahl}>Klick mich</button>
                <button className="knopf" onClick={this.klickzahldoppel}>Klick michdoppel</button>

                
                </div>
        );
    }
}

export default Klick;