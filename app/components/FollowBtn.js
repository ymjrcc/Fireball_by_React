import React,{Component} from 'react'
import style from '../css/followBtn.css'


class FollowingBtn extends Component{

    constructor(props){
        super(props);
        this.state = {
            following: this.props.following
        }
    }

    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            following: !this.state.following
        })
    }

    render(){
        return (
            <div 
                className={this.state.following==true?style["followingBtn"]:style["followBtn"]}
                onClick={this.handleClick.bind(this)}
            >
                {this.state.following==true?"已关注":"关注"}
            </div>
        )
    }
}

export default FollowingBtn;