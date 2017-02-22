import React,{Component} from 'react'
import TopFixed from './TopFixed'
import FollowBtn from './FollowBtn'
import style from '../css/buyer.css'

class Card extends Component{
    render(){
        return (
            <div className={style.card}>
                <div className={style.cardMain}>
                    <div className={style.cardImgBox}>
                        <div className={style.cardImg}></div>
                    </div>
                    <div className={style.cardInfo}>
                        <div className={style.name}>梵高先生</div>
                        <div className={style.followers}>7.2万人订阅</div>
                        <FollowBtn following={true} />
                    </div>
                </div>
                <div className={style.desc}>
                    <div className={style.quoteBox}>
                        <div className={style.quote}></div>
                    </div>
                    <p>微博：梵高不先生</p>
                    <p>以独到的眼光，帮你挑选提升自身逼格的毒辣好物，让逼格彻底融进你的生活。</p>
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
    render(){
        return (
            <div className={style.buyer}>
                <TopFixed />
                <Card />
                <Popular />
                <Products />
            </div>
        )
    }
}

export default Buyer;