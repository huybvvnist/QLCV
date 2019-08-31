import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Router extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/QLCCTC" component={QLCCTC} />
                    <Route path="/QLN" component={QLN} />
                </div>
            </Router>
        );
    }
}

export default Router;