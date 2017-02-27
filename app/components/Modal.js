import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import style from '../css/modal.css'

class Modal extends Component{
    static defaultProps = {
        open: false
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open && !this.props.open){//开
            this.node = document.createElement('div');
            this.node.className = 'modal';
            document.getElementsByTagName('body')[0].appendChild(this.node);
            let modal = (
                <div className={style.container}>
                    {this.props.children}
                </div>
            );
            let all = document.getElementsByClassName('modal');
            ReactDOM.render(modal,all[all.length-1]);
        }else if(!nextProps.open && this.props.open){//关
            // 方法1：
            // ReactDOM.unmountComponentAtNode(this.node);
            // 方法2：（不太正规）
            document.getElementsByTagName('body')[0].removeChild(document.getElementsByClassName('modal')[0])
        }
        if(nextProps.window=="edit"){
            document.getElementsByClassName('edit').length>0 && (document.getElementsByClassName('edit')[0].style.display="block");
            document.getElementsByClassName('submit').length>0 && (document.getElementsByClassName('submit')[0].style.display="none");
        }else if(nextProps.window=="submit"){
            document.getElementById('count').innerHTML=window.count;
            document.getElementById('price').innerHTML=(window.count * window.price + 10);
            document.getElementsByClassName('edit').length>0 && (document.getElementsByClassName('edit')[0].style.display="none");
            document.getElementsByClassName('submit').length>0 && (document.getElementsByClassName('submit')[0].style.display="block");
        }
    }

    render(){
        return null;
    }
}

export default Modal;