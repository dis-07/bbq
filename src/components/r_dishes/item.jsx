import React from 'react'

class DishesItem extends React.Component {
    render = () => (
        <div className="DishesItem">
            <div className="Dishes__imageBox">
                <img 
                src="https://placehold.it/413x268" 
                alt="" 
                className="Dishes__image"
                width="413"
                height="268"
                />
            </div>
            <span className="infoItem">

            </span>
            <span className="titleItem">

            </span>
            <span className="priceItem">

            </span>
            <button className="minusItem">
                
            </button>
            <input type="number" className="quantityItem"/>
            <button className="plusItem">

            </button>
            <button className="orderItem">

            </button>
        </div>
    )
}

export default DishesItem;