import React,{Component} from 'react'
import {hashHistory, Link} from 'react-router'
import classnames from 'classnames'
import Item from './Item'
import style from '../css/topic.css'
import topicData from '../data/topicData.json'
import productsData from '../data/productsData.json'

class TopicHeader extends Component{
    render(){
        const str = location.hash.split("/").pop();
        const title = decodeURIComponent(str);
        return (
            <div className={style.topicHeader}>
                <div className={style.topicHeaderBack} onClick={function(){hashHistory.goBack();}}></div>
                {title}
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

class TopicBox extends Component{

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
            <div className={style.topicBox}>
                <div className={style.topicNav}>
                    <NavItem choosen={this.state.value=="new"} type="new" handleChoose={this.handleChoose.bind(this)}>最新</NavItem>
                    <NavItem choosen={this.state.value=="hot"} type="hot" handleChoose={this.handleChoose.bind(this)}>最热</NavItem>
                </div>
                <TopicList choosen={this.state.value} />
            </div>
        )
    }
}

class TopicList extends Component{

    renderLatestList(data){
        let dataArr = [];
        for(let i = 0; i < 5; i++){
            dataArr.push(
                <Item 
                    key={data[i].id} 
                    id={data[i].id} 
                    title={data[i].title} 
                    likes={data[i].likes} 
                    price={data[i].price} 
                    cover={data[i].cover} 
                />
            );
        }
        return dataArr;
    }

    renderPopularList(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].likes>3000){
                dataArr.push(
                    <Item 
                        key={data[i].id} 
                        id={data[i].id} 
                        title={data[i].title} 
                        likes={data[i].likes} 
                        price={data[i].price} 
                        cover={data[i].cover} 
                    />
                );
            }
            if(dataArr.length==5)break;
        }
        return dataArr;
    }

    render(){
        let res = this.renderLatestList(productsData);
        if(this.props.choosen=="hot"){
            res = this.renderPopularList(productsData);
        }
        return (
            <div className={style.topicList}>
                {res}
            </div>
        )
    }
}

class Topic extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
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

