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
                backgroundColor: '#E0FFFF',
                "padding-top": '20px',
                paddingBottom: '20px',
                width: 1110,
                height: 350
            }
        }
        const styleCss1 = {
            header : {
                fontSize : 16,
                width: "100%",
                marginTop: 2,
                marginBottom: 2,
                color: "#175a5f"
            }
        }
        const styleCss2 = {
            header : {
                fontSize : 20,
                color: "#175a5f",
                marginLeft: 400
            }
        }
        const styleCss3 = {
            header : {
                fontSize : 16,
                width: "100%",
                marginTop: 10,
                marginBottom: 10,
                color: "#175a5f"
            }
        }
        const styleCss4 = {
            header : {
                marginLeft: 200
            }
        }
        const styleCss5 = {
            header : {
                height: 100,
                width : 400
            }
        }
        const styleCss6 = {
            header : {
                width : 400
            }
        }
        return(
                <div className="container-bottom jumbotron"  style={styleCss.header}>
                    <div >
                        <p style={styleCss2.header}>在线留言</p>
                    </div>
                    <div style={styleCss4.header} >
                        <div style={styleCss1.header}>
                            <p style={styleCss3.header}>姓名：<input  style={styleCss6.header}/></p>

                        </div>
                        <div style={styleCss1.header}>
                            <p style={styleCss3.header}>电话：<input style={styleCss6.header} /></p>

                        </div>
                        <div style={styleCss1.header}>
                            <p style={styleCss3.header}>邮箱：<input style={styleCss6.header} /></p>

                        </div>
                        <div style={styleCss1.header}>
                            <p style={styleCss3.header}>备注：<input  style={styleCss5.header}/></p>

                        </div>
                        <button style={styleCss4.header}>提交留言</button>
                    </div>


                </div>

        );
    }

}

export default Email;