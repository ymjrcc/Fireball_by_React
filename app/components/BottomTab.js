import React,{Component} from 'react'
import {Link} from 'react-router'
import style from "../css/bottom.css"

class TabItem extends Component{
    render(){
        return (
            <Link className={style.tabItem} to={this.props.to}>{this.props.name}</Link>
        )
    }
}

class BottomTab extends Component{
    render(){
        return (
            <div data-maxwidth className={style.bottomTab}>
                <TabItem name="Home" to="/home" />
                <TabItem name="Discover" to="/discover" />
                <TabItem name="Personal" to="/personal" />
            </div>
        )
    }
}

export default BottomTab;

