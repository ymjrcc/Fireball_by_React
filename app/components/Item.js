import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/item.css'

class Item extends Component{
    render(){
        return (
            <Link to={"/detail/"+this.props.id} className={style.item}>
                <div className={style.img}>
                    <img src={require('../images/covers/' + this.props.cover)} />
                </div>
                <div className={style.info}>
                    <div className={style.title}>{this.props.title}</div>
                    <div className={style.likes}>{this.props.likes}</div>
                    <div className={style.price}>{this.props.price + " 元"}</div>
                </div>
            </Link>
        )
    }
}

export default Item;