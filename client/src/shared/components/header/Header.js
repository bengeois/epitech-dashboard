import React, {Component} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import history from "../../../history";
import MenuContext from "../../../core/contexts/MenuContext";

class HeaderMenu extends Component {

    static contextType = MenuContext;

    constructor(props) {
        super(props);

        this.state = {
            styleMenu: {
                'margin-left': '-300px'
            },
            menuIsOpen: false,
            title: 'Home'
        };
    }

    handleClickMenuIcon = () =>
    {
        if (this.state.menuIsOpen) {
            this.setState({
                styleMenu: {
                    'margin-left': '-300px'
                },
                menuIsOpen: false
            })
        } else {
            this.setState({
                styleMenu: {
                    'margin-left': '0px'
                },
                menuIsOpen: true
            })
        }
    }

    handleClickDisconnect = () =>
    {
        localStorage.removeItem('JWTToken');
        this.context.setShowMenu('none');
        this.setState({
            styleMenu: {
                'margin-left': '-300px'
            },
            menuIsOpen: false,
            title: 'Home'
        })
        history.push('/');
    }

    handleClickHome = () =>
    {
        this.setState({
            styleMenu: {
                'margin-left': '-300px'
            },
            menuIsOpen: false,
            title: 'Home'
        })
        history.push('/home');
    }

    handleClickAccount = () =>
    {
        this.setState({
            styleMenu: {
                'margin-left': '-300px'
            },
            menuIsOpen: false,
            title: 'Account'
        })
        history.push('/account');
    }

    componentDidMount()
    {
        console.log(this.context);
    }

    componentDidUpdate() {
        console.log("Update", this.context);
    }

    render() {
        return (
            <div id="header-menu" style={{display: this.context.showMenu}}>
                <div className="header">
                    <div className="logo-menu">
                        <MenuIcon className="menu-icon" onClick={this.handleClickMenuIcon} />
                    </div>
                    <div className="title">
                        <p>{this.state.title}</p>
                    </div>
                </div>
                <div className="menu" style={this.state.styleMenu}>
                    <div className="home-button button" onClick={this.handleClickHome}>
                        <p>Home</p>
                    </div>
                    <div className="account-button button" onClick={this.handleClickAccount}>
                        <p>Account</p>
                    </div>
                    <div className="disconnect-button button" onClick={this.handleClickDisconnect}>
                        <p>Disconnect</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMenu;