import React from 'react'

class DishesItem extends React.Component {
    render = () => (
        <div className="DishesItem">
            <div className="Dishes__imageBox">
                <img 
                src={this.props.image.src} 
                alt="" 
                className="Dishes__image"
                width={this.props.image.width}
                height={this.props.image.height}
                />
            </div>
            <span className="infoItem">{this.props.info}
            </span>
            <span className="titleItem">{this.props.title}
            </span>
            <span className="priceItem">{this.props.price}
            </span>
            <button className="minusItem">{this.props.minus}
            </button>
            <div className="quantityItemInput">
                <input type="number" className="quantityItem"/>{this.props.quantity}
            </div>
            <button className="plusItem">{this.props.plus}
            </button>
            <button className="orderItem">{this.props.order}
            </button>
        </div>
    )
}

export default DishesItem;