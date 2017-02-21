import React,{Component} from 'react'
import TopFixed from './TopFixed'
import style from '../css/buyers.css'

class BuyersList extends Component{
    render(){
        return (
            <div className={style.buyersList}>
                come back soon...
            </div>
        )
    }
}

class Buyers extends Component{
    render(){
        return (
            <div>
                <TopFixed>买手集市</TopFixed>
                <BuyersList />
            </div>
        )
    }
}

export default Buyers;