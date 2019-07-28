import React,{Component} from 'react';
import {NavLink} from "react-router-dom";

class Email extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const styleCss = {
            header : {
                color: 'red',
                backgroundColor: '#ccc',
                "padding-top": '20px',
                paddingBottom: '20px'
            }
        }
        return(
            <div className="row justify-content-center">
                <div className="col-2">
                <h5>客户服务：</h5>
                    <ul>
                        <li className="fa fa-phone fa-lg" />: +852 1234 5678
                        <br />
                        <li className="fa fa-fax fa-lg" />: +852 8765 4321
                        <br />
                        <li className="fa fa-envelope fa-lg" />: <a href="mailto:info@exa.com">info@exa.com</a>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>商务合作：</h5>
                    <ul>
                        <li className="fa fa-phone fa-lg" />: +852 1234 5678
                        <br />
                        <li className="fa fa-fax fa-lg" />: +852 8765 4321
                        <br />
                        <li className="fa fa-envelope fa-lg" />: <a href="mailto:info@exa.com">info@exa.com</a>
                    </ul>
                </div>
                <div className="col-3">
                    <h5>公司地址：</h5>
                    <ul>
                        <li className="fa  fa-lg" />总部: 青岛市黄岛区
                        <br />
                        <li className="fa  fa-lg" />邮编: 266500
                        <br />
                    </ul>
                </div>
            </div>
        );
    }

}

export default Email;