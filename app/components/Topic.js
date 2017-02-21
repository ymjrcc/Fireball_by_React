import React,{Component} from 'react'
import {hashHistory, Link} from 'react-router'
import classnames from 'classnames'
import Item from './Item'
import style from '../css/topic.css'
import topicData from '../data/topicData.json'

class TopicHeader extends Component{
    render(){
        return (
            <div className={style.topicHeader}>
                <div className={style.topicHeaderBack} onClick={function(){hashHistory.goBack();}}>&lt;</div>
                火球精选
            </div>
        )
    }
}

class NavItem extends Component{

    handleClick(){
        this.props.handleChoose(this.props.type);
    }

    render(){
        return (
            <span 
                className={style.navItem + " " + classnames({[style.choosenItem]:this.props.choosen})}
                onClick = {this.handleClick.bind(this)}
            >
                {this.props.children}
            </span>
        )
    }
}

class TopicNav extends Component{

    constructor(props){
        super(props);
        this.state={value:"new"};
    }

    handleChoose(val){
        this.setState({
            value: val
        })
    }

    render(){
        return (
            <div className={style.topicNav}>
                <NavItem choosen={this.state.value=="new"} type="new" handleChoose={this.handleChoose.bind(this)}>最新</NavItem>
                <NavItem choosen={this.state.value=="hot"} type="hot" handleChoose={this.handleChoose.bind(this)}>最热</NavItem>
            </div>
        )
    }
}

class TopicList extends Component{

    renderTopicList(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            dataArr.push(<Item key={data[i].id} title={data[i].title} likes={data[i].likes} price={data[i].price} />);
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.topicList}>
                {this.renderTopicList(topicData)}
            </div>
        )
    }
}

class TopicBox extends Component{
    render(){
        return (
            <div className={style.topicBox}>
                <TopicNav />
                <TopicList />
            </div>
        )
    }
}

class Topic extends Component{
    render(){
        return (
            <div className={style.topic}>
                <TopicHeader />
                <TopicBox />
            </div>
        )
    }
}

export default Topic;

