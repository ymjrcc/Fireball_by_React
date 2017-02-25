import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import FollowBtn from './FollowBtn'
import style from '../css/buyers.css'
import buyersData from '../data/buyersData.json'

class BuyerItem extends Component{
    render(){
        let label = "<span>" + this.props.label.join("</span><span>") + "</span>";
        return (
            <Link to={"/buyer/"+this.props.id}>
                <div className={style.buyerItem}>
                    <div className={style.buyerImg} style={{backgroundColor:this.props.img}}></div>
                    <div className={style.buyerInfo}>
                        <div className={style.name}>{this.props.name}</div>
                        <div className={style.desc}>{this.props.desc}</div>
                        <div className={style.label} dangerouslySetInnerHTML={{__html: label}}></div>
                        <div className={style.followers}>{this.props.followers + "人关注"}</div>
                        <div className={style.followBtnBox}>
                            <FollowBtn following={this.props.following} />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

class BuyersList extends Component{

    renderBuyers(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            dataArr.push(<
                BuyerItem key={data[i].id} 
                id={data[i].id}
                name={data[i].name} 
                desc={data[i].desc} 
                label={data[i].label} 
                img={data[i].img}
                followers={data[i].followers} 
                following={data[i].following} 
            />);
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

    componentDidMount(){
        document.body.scrollTop=0;
    }

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