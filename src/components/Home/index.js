import React from 'react';
import './style.scss';
import cover from '../../images/cover.jpg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setProfile({
      ...this.props.profile
    })
  }

  render() {
    return (
      <>
        <div className="home full">
            <div className='cover'>
              <img src={cover}/>
            </div>
            <div className="search-bar">
              <div className="typography-1">Home page</div>
              <div ><button className="primary block">Search</button></div>
            </div>
        </div>
      </>
    );
  }
}