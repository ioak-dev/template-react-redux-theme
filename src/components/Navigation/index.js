import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'
import { getProfile, setProfile } from '../../actions/ProfileActions';
import PropTypes from 'prop-types';
import {withCookies} from 'react-cookie';

import './style.scss';
import Desktop from './Desktop';
import Mobile from './Mobile';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.props.getProfile();
        this.state = {
            visible: false,
            mobilemenu: 'hide',
            chooseTheme: false,
            showSettings: false,
            transparentNavBar: false,
            firstLoad: true
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.event && nextProps.event.name === 'navbar-transparency') {
            this.setState({
                transparentNavBar: nextProps.event.signal
            })
        }
        if ((this.state.firstLoad && nextProps.authorization && nextProps.authorization.isAuth) || 
            (nextProps.event && nextProps.event.name === 'loggedin')) {
            // this.props.reloadProfile(nextProps.authorization);
            this.setState({
                firstLoad: false
            })
        }
    }

    toggleDarkMode = () => {
        if (this.props.profile.theme === 'theme_dark') {
            this.props.setProfile({
                ...this.props.profile,
                theme: 'theme_light'
            })   
        } else  {
            this.props.setProfile({
                ...this.props.profile,
                theme: 'theme_dark'
            })   
        }
    }

    changeTextSize = (size) => {
        this.props.setProfile({
            ...this.props.profile,
            textSize: size
        })
    }

    changeThemeColor = (color) => {
        this.props.setProfile({
            ...this.props.profile,
            themeColor: color
        })
    }

    login = (type) => {
        this.props.history.push('/login?type=' + type);
    }

    toggleSettings = () => {
        this.setState({
            showSettings: !this.state.showSettings
        })
    }

    render() {
        return (
            <div className="nav">
                <Desktop {...this.props} logout={this.props.logout} login={this.login} toggleSettings={this.toggleSettings} transparent={this.state.transparentNavBar} />
                <Mobile {...this.props} logout={this.props.logout} login={this.login} toggleSettings={this.toggleSettings} transparent={this.state.transparentNavBar} />
            </div>
        );
    }
}

Navigation.propTypes = {
    sendEvent: PropTypes.func.isRequired,
    removeAuth: PropTypes.func.isRequired,
    authorization: PropTypes.object.isRequired,
    getProfile: PropTypes.func.isRequired,
    setProfile: PropTypes.func.isRequired,

    profile: PropTypes.object.isRequired,
    event: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfile, setProfile })(withCookies(withRouter(Navigation)));