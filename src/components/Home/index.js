import React from 'react';
import './style.scss';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home full">
            <div className="cover">
              <div className="search-bar">
                <button className="primary animate">Search</button>
              </div>
            </div>
        </div>
      </>
    );
  }
}