import React, { Component } from 'react';

class TopMenu extends Component {
    render() {
        return (
            <div className="row top_menu">
                <div className="col-sm-12">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">VNIST</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Quản lý công việc</a></li>
                                <li><a href="#">Quản lý quy trình</a></li>
                                <li><a href="#">Quản lý KPI</a></li>
                                <li className="active"><a href="#">Quản lý Cơ cấu tổ chức</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default TopMenu;