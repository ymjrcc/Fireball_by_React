import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import FollowBtn from './FollowBtn'
import style from '../css/buyer.css'
import buyersData from '../data/buyersData.json'
import productsData from '../data/productsData.json'

class Card extends Component{
    render(){

        const res = this.props.buyerInfo;

        return (
            <div className={style.card}>
                <div className={style.cardMain}>
                    <div className={style.cardImgBox}>
                        <div className={style.cardImg} style={{backgroundColor: res.img}}></div>
                    </div>
                    <div className={style.cardInfo}>
                        <div className={style.name}>{res.name}</div>
                        <div className={style.followers}>{res.followers}人订阅</div>
                        <FollowBtn following={res.following} />
                    </div>
                </div>
                <div className={style.desc}>
                    <div className={style.quoteBox}>
                        <div className={style.quote}></div>
                    </div>
                    <p>{res.label.join("，")}</p>
                    <p>{res.desc}</p>
                </div>
            </div>
        )
    }
}

class PopularItem extends Component{
    render(){
        return (
            <Link to={"/detail/"+this.props.id} className={style.popularItem}>
                <img src={require('../images/covers/'+this.props.cover)} />
            </Link>
        )
    }
}

class Popular extends Component{

    renderPopular(data){
        let dataArr = [];
        let id = location.hash.split("/").pop();
        for(let i = 0; i < data.length; i++){
            if(data[i].authorId==id){
                dataArr.push(<
                    PopularItem key={data[i].id} 
                    id={data[i].id}
                    cover={data[i].cover}
                />);
            }
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.popular}>
                <div className={style.title}>最受欢迎</div>
                <div className={style.subTitle}>MOST POPULAR</div>
                <div className={style.popularBox}>
                    {this.renderPopular(productsData)}
                </div>
            </div>
        )
    }
}

class ProductItem extends Component{
    render(){
        return (
            <Link to={"/detail/"+this.props.id} className={style.productItem}>
                <div className={style.productImg}>
                    <img src={require('../images/covers/'+this.props.cover)} />
                </div>
                <div className={style.productTitle}>{this.props.title}</div>
                <div className={style.productDesc}>
                    {this.props.date}
                    {' '}
                    {this.props.likes + '人喜欢'}
                </div>
            </Link>
        )
    }
}

class Products extends Component{

    renderItemList(data){
        let id = location.hash.split("/").pop();
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].authorId==id){
                dataArr.push(<
                    ProductItem key={data[i].id} 
                    id={data[i].id}
                    title={data[i].title}
                    cover={data[i].cover} 
                    date={data[i].date}
                    likes={data[i].likes}
                />);
            }
            
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.products}>
                <div className={style.productsHeader}>
                    <div className={style.title}>最新商品</div>
                    <div className={style.subTitle}>LATEST PRODUCTS</div>
                </div>
                
                {this.renderItemList(productsData)}
            </div>
        )
    }
}

class Buyer extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    getBuyerInfo(data){
        let id = location.hash.split("/").pop();
        let buyerObj = {id:"__WARNING__"};
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                buyerObj = data[i];
                break;
            }
        }
        return buyerObj;
    }

    render(){

        const buyerInfo = this.getBuyerInfo(buyersData);
        if(buyerInfo.id=="__WARNING__"){
            setTimeout(function(){location.hash="#/"},2000);
            return <div>找不到资源！</div>
        }else{
            return (
                <div className={style.buyer}>
                    <TopFixed />
                    <Card buyerInfo={buyerInfo} />
                    <Popular />
                    <Products />
                </div>
            )
        }
    }
}

export default Buyer;