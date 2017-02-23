import React,{Component} from 'react'
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
                        <div className={style.cardImg}></div>
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

class Popular extends Component{
    render(){
        return (
            <div className={style.popular}>
                <div className={style.title}>最受欢迎</div>
                <div className={style.subTitle}>POPULAR</div>
                <div className={style.popularBox}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

class ProductItem extends Component{
    render(){
        return (
            <div className={style.productItem}>
                <div className={style.productImg}></div>
                <div className={style.productTitle}>这把刀戳到了我心中的某个G点了</div>
                <div className={style.productDesc}>14小时前发布 1641人喜欢</div>
            </div>
        )
    }
}

class Products extends Component{
    render(){
        return (
            <div className={style.products}>
                <div className={style.productsHeader}>
                    <div className={style.title}>最新商品</div>
                    <div className={style.subTitle}>48 PRODUCTS</div>
                </div>
                
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
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