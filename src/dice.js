import React,{Component} from 'react';
import './dice.css'

class Würfel extends Component{
    render(){
        let cls=`fas fa-dice-${this.props.face}`
        return(
            <div className="würfel">
                <i className={cls} ></i>
             </div>
            
        )
    }
}


export default Würfel;