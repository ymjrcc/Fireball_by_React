import React,{Component} from 'react'
import style from '../css/item.css'

class Item extends Component{
    render(){
        return (
            <div className={style.item}>
                <div className={style.img}></div>
                <div className={style.info}>
                    <div className={style.title}>{this.props.title}</div>
                    <div className={style.likes}>{this.props.likes}</div>
                    <div className={style.price}>{this.props.price + " 元"}</div>
                </div>
            </div>
        )
    }
}

export default Item;