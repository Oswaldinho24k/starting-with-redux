import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>PluralSight Admin</h1>
        <p>react, Redux an React router in es6 for responsive wevb apps</p>
        <Link to="/about" className="btn btn-primary btn-large">Learn More</Link>
      </div>
    )
  }
}
export default HomePage;
