import React from 'react'
import DishesItem from './item'
import './styles.css'

class Dishes extends React.Component {
    render = () => (
        <div className="Dishes">
        {this.props.items.map(item => (
            <DishesItem
                image={item.image}
                info={item.info}
                title={item.title}
                price={item.price}
                minus={item.minus}
                quantity={item.quantity}
                plus={item.plus}
                order={item.order}
            />      
        ))}
        </div>
    )
}

export default Dishes;