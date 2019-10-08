import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { NavLink } from 'react-router-dom';

class Links extends Component {
    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className="links">
                {this.props.authorization.isAuth &&
                    <>
                    <NavLink to="/home" className="navitem" activeClassName="active">Home</NavLink>
                    <NavLink to="/login" className="navitem" activeClassName="active">Login</NavLink>
                    </>
                }
            </div>
        );
    }
}

Links.propTypes = {
    authorization: PropTypes.object.isRequired
}

export default Links;