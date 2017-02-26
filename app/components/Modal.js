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
                    123456
                </div>
            );
            let all = document.getElementsByClassName('modal');
            ReactDOM.render(modal,all[all.length-1]);
        }else if(!nextProps.open && this.props.open){//关
            ReactDOM.unmountComponentAtNode(this.node);
        }
    }

    render(){
        return null;
    }
}

export default Modal;