import React, { Component } from 'react';

class ItemPanel extends Component {
    constructor(props){
        super(props);}
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            {this.props.tieude}
            </a>
                        <div className="list_control">
                            <button className="add_unit success" onclick>+</button>
                            <button className="del_unit delete" onclick>-</button>
                        </div>
                    </h4>
                </div>
                {/* <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        <ul className="nav">
                            <li>
                                <div className="panel-group" id="accordionMenuOneDotOne" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOneDotOne">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordionMenuOneDotOne" href="#collapseOneDotOne" aria-expanded="false" aria-controls="collapseOneDotOne">
                                                    Phòng tổ chức
                        </a>
                                                <div className="list_control">
                                                    <button className="add_unit success" onclick>+</button>
                                                    <button className="del_unit delete" onclick>-</button>
                                                </div>
                                            </h4>
                                        </div>
                                        <div id="collapseOneDotOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneDotOne">
                                            <div className="panel-body">
                                                <ul className="nav">
                                                    <li>
                                                        <a href="#">item 1.1.1</a>
                                                    </li>
                                                    <li><a href="#">item 1.1.2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="left_item">Phòng hành chính</a>
                                <div className="list_control">
                                    <button className="add_unit" onclick>+</button>
                                    <button className="del_unit" onclick>-</button>
                                </div>
                            </li>
                            <div className="clearfix" />
                        </ul>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ItemPanel;