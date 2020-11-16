import React, { Component } from 'react';
import history from "../../history";
import MenuContext from "../../core/contexts/MenuContext";
import './Home.css'
import WidgetForm from './components/WidgetForm'
import {Redirect, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Home extends Component {

    static contextType = MenuContext;

    constructor(props) {
        super(props);

        if (localStorage.getItem('JWTToken') == null) {
            history.push('/');
        }

        this.handleNewWidgetClick = this.handleNewWidgetClick.bind(this);
    }

    componentDidMount()
    {
        this.context.setShowMenu('block');
    }

    handleNewWidgetClick()
    {
        history.push('/home/new-widget')
    }

    render() {
        return (
            <div id="home-module">
                <div class="new-widgets-button">
                    <button onClick={this.handleNewWidgetClick}>New widgets</button>
                </div>
                <div class="content">

                </div>
                <TransitionGroup component={null}>
                    <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames="fade" key={this.props.location.key}>
                        <Switch location={this.props.location}>
                            <Route path={'/home/new-widget'} render={() => <WidgetForm />}>
                            </Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default Home;