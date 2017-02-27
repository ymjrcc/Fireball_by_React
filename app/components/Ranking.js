import React,{Component} from 'react'
import {Link} from 'react-router'
import Item from './Item'
import TopFixed from './TopFixed'
import style from '../css/ranking.css'
import productsData from '../data/productsData.json'

class Ranking extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div className={style.ranking}>
                <TopFixed>本周好物排行</TopFixed>
                <RankingList />
            </div>
        )
    }
}

class RankingList extends Component{
    renderRanking(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
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

    render(){
        return (
            <div className={style.rankingList}>
                {this.renderRanking(productsData)}
            </div>
        )
    }


}

export default Ranking;