import React,{Component} from 'react';
import Würfel from './dice'
import Wüfeln from './würfeln.css'
//hier benötigt man ein Constructur
class Würfeln extends Component{
    static defaultProps={
        seiten:['one','two','three','four','five','six']

    };
    
    constructor(props){
        super(props);
        this.state={würfel1: 'one',würfel2:'five',drehende:false};
        this.drehen=this.drehen.bind(this);
    }
    drehen(){
    const neuerwürfel=
     this.props.seiten[Math.floor(Math.random()* this.props.seiten.length)];
     const neuerwürfel2=
     this.props.seiten[Math.floor(Math.random()* this.props.seiten.length)];

     this.setState({würfel1:neuerwürfel, würfel2:neuerwürfel2 ,drehende:true});

     setTimeout(()=>{
     this.setState({drehende:false});
    },500);
}
    render(){
        return(
            <div className='drehen'>
                <div className='drehen-container'>
                <Würfel face={this.state.würfel1}/>
                <Würfel face={this.state.würfel2}/>
                </div>
                <button onClick={this.drehen} disabled={this.state.drehende}>
                    {this.state.drehende?"Würfelt...":"Bitte Würfeln"}
                </button>


            </div>
        )
       
    }
}
export default Würfeln;