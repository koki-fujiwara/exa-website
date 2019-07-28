import React,{Component} from 'react';
import {Button} from "reactstrap";

class Service extends Component{
    constructor(props){
        super(props);
        this.state = {
            servicesArr :[
                'service1',
                'service2',
                'service3'
            ]
        }
    }

    render(){
        const styleCss = {
            header : {
                width: 465 ,
                height: 250,
                paddingBottom: 10
            }
        }
        return(
            <div className="container home-section" id="service">
                <div className="row row-header home-section">
                    <div className="col-12 col-md-6 col-service-sub ml-0" style={{"background-color": "#FFD8C7"}}>
                        <h3>养老&护理</h3>
                        <img style={styleCss.header} src="/assets/images/nurse01.jpg"/>
                        <div className="btn-center">
                            <Button className="btn-lg btn-primary">阅读更多</Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-service-sub mr-0" style={{"background-color": "#CEECFB"}}>
                        <h3>医疗大数据</h3>
                        <img style={styleCss.header} src="/assets/images/medical01.jpg"/>
                        <div className="btn-center">
                            <Button className="btn-lg btn-primary">阅读更多</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Service;