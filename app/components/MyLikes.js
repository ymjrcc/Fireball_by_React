import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import style from '../css/myLikes.css'

class LikeItem extends Component{
    render(){
        return (
            <Link to={"/detail/" + this.props.id}>
                <div className={style.likeItem} data-index={this.props.index}></div>
            </Link>
        )
    }
}

class LikesBox extends Component{
    render(){
        return (
            <div className={style.likesBox}>
                <LikeItem id="p010" index="0"/>
                <LikeItem id="p009" index="1"/>
                <LikeItem id="p008" index="2"/>
                <LikeItem id="p001" index="3"/>
                <LikeItem id="p002" index="4"/>
                <LikeItem id="p004" index="5"/>
            </div>
        )
    }
}

class MyLikes extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    render(){
        return (
            <div className={style.myLikes}>
                <TopFixed>我的喜欢</TopFixed>
                <LikesBox />
            </div>
        )
    }
}

export  default MyLikes;