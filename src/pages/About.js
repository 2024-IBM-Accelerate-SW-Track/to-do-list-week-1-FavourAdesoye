import React, { Component } from 'react';
import './About.css';
import img2128 from '../assets/img2128.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
<div className="split left">
<div className="centered">
<img 
className="profile_image"
src={img2128}
alt="Profile Pic"
></img>
</div>
</div>
<div className="split right">
<div className="centered">
<div className="name_title">Favour Adesoye</div>
<div className="brief_description">
Sophomore Computer Science major at Virginia State Univerisity
</div>
</div>
</div>
</div>
      </div>
    )
  }
}