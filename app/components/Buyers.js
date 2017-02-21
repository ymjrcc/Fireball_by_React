import React,{Component} from 'react'
import TopFixed from './TopFixed'
import FollowBtn from './FollowBtn'
import style from '../css/buyers.css'
import buyersData from '../data/buyersData.json'

class BuyerItem extends Component{
    render(){
        let label = this.props.label.join("</span><span>");
        console.log(label);
        return (
            <div className={style.buyerItem}>
                <div className={style.buyerImg}></div>
                <div className={style.buyerInfo}>
                    <div className={style.name}>{this.props.name}</div>
                    <div className={style.desc}>{this.props.desc}</div>
                    <div className={style.label} dangerouslySetInnerHTML={{__html: "<span>"+label+"</span>"}}></div>
                    <div className={style.followers}>{this.props.followers + "人关注"}</div>
                    <div className={style.followBtnBox}>
                        <FollowBtn following={this.props.following} />
                    </div>
                </div>
            </div>
        )
    }
}

class BuyersList extends Component{

    renderBuyers(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            console.log(data[i].label);
            dataArr.push(<BuyerItem key={data[i].id} name={data[i].name} desc={data[i].desc} label={data[i].label} followers={data[i].followers} following={data[i].following} />);
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.buyersList}>
                {this.renderBuyers(buyersData)}
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