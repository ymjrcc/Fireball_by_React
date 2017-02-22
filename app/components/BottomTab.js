import React,{Component} from 'react'
import {Link} from 'react-router'
import style from "../css/bottom.css"

class TabItem extends Component{

    render(){
        let name = this.props.name;
        let curTab = this.props.curTab;
        return (
            <Link className={style.tabItem} to={"/"+name}>
                <div 
                    className={ name == curTab ? style[name + "1"] : style[name + "0"] }
                >
                </div>
            </Link>
        )
    }
}

class BottomTab extends Component{
    render(){
        let curHash = location.hash.substring(2);
        return (
            <div data-maxwidth className={style.bottomTab}>
                <TabItem curTab={curHash} name="home" />
                <TabItem curTab={curHash} name="discover" />
                <TabItem curTab={curHash} name="personal" />
            </div>
        )
    }
}

export default BottomTab;

