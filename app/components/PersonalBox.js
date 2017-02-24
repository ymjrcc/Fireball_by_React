import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import style from '../css/personal.css'

class PersonalBox extends Component{
    render(){
        return <div>{this.props.children}</div>
        /*return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="transitionWrapper"
                    component="div"
                    className={style.transitionWrapper}
                    transitionEnter={false}
                    transitionLeave={false}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}>
                    <div key={this.props.location.pathname}
                        style={{position:"absolute", width: "100%"}}>
                        {
                            this.props.children
                        }
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )*/
    }
}

export default PersonalBox;