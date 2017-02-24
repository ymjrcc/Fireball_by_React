import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import FollowBtn from './FollowBtn'
import style from '../css/mySubscriptions.css'
import buyersData from '../data/buyersData.json'

class SubscriptionItem extends Component{
    render(){
        return (
            <Link to={"/buyer/"+this.props.id} className={style.subscriptionItem}>
                <div className={style.headImg}></div>
                <div className={style.name}>
                    {this.props.name}
                    <div className={style.btnBox}>
                        <FollowBtn following={true} />
                    </div>
                </div>
            </Link>
        )
    }
}

class SubscriptionsBox extends Component{

    renderSubscriptions(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].following==true){
                dataArr.push(<
                    SubscriptionItem key={data[i].id} 
                    id={data[i].id}
                    name={data[i].name} 
                />);
            }
            
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.subscriptionsBox}>
                {this.renderSubscriptions(buyersData)}
            </div>
        )
    }
}

class MySubscriptions extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>我的订阅</TopFixed>
                <SubscriptionsBox />
            </div>
        )
    }
}

export  default MySubscriptions;