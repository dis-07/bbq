import React from 'react';

class NavBarItem extends React.Component {
render = () => (
    <div className="NavBarItem">
        <div className="NavBarItem__imageBox">
            <img src={this.props.image.src} 
            alt="" 
            className="NavBarItem__image"
            width={this.props.image.width}
            height={this.props.image.heights}
            />
        </div>
        <span className="NavBarItem__title">{this.props.title}</span>
    </div>
)   
}

export default NavBarItem;