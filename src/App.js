import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

import Dishes from './components/r_dishes'

import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image1 from './components/images/NavBar/01.png'
import image2 from './components/images/NavBar/02.png'
import image3 from './components/images/NavBar/03.png'
import image4 from './components/images/NavBar/04.png'
import image5 from './components/images/NavBar/05.png'
import image6 from './components/images/NavBar/06.png'
import image7 from './components/images/NavBar/07.png'

import img1 from './components/images/Dishes/01.png'
import img2 from './components/images/Dishes/02.png'
import img3 from './components/images/Dishes/03.png'
import img4 from './components/images/Dishes/04.png'
import img5 from './components/images/Dishes/05.png'
import img6 from './components/images/Dishes/06.png'
import img7 from './components/images/Dishes/07.png'
import img8 from './components/images/Dishes/08.png'

const navBarData = [
  { 
    id: 1,
    title: 'Бургеры',
    image: {
      src: image1,
      alt: '',
      width: 119,
      height: 75
    }
  },

  { 
    id: 2,
    title: 'Бизнес меню',
    image: {
      src: image2,
      alt: '',
      width: 120,
      height: 120 
    }
  },

  { 
    id: 3,
    title: 'Кухня',
    image: {
      src: image3,
      alt: '',
      width: 116,
      height: 116
    }
  },

  { 
    id: 4,
    title: 'Первые блюда',
    image: {
      src: image4,
      alt: '',
      width: 94,
      height: 94
    }
  },

  { 
    id: 5,
    title: 'Мангал',
    image: {
      src: image5,
      alt: '',
      width: 135,
      height: 90
    }
  },

  { 
    id: 6,
    title: 'Десерты',
    image: {
      src: image6,
      alt: '',
      width: 79,
      height: 85
    }
  },

  { 
    id: 7,
    title: 'Напитки',
    image: {
      src: image7,
      alt: '',
      width: 113,
      height: 103
    }
  }

]

const DishesData = [
  {
    id: 1,
    info: 'Мангал',
    title: 'Сыр на мангале с лимонно-медовой заправкой',
    price: '29 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img1,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 2,
    info: 'Бургеры',
    title: 'Куриный бургер-сет ',
    price: '60 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img2,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 3,
    info: 'Мангал',
    title: 'Большой денер',
    price: ' ',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img3,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 4,
    info: 'Мангал',
    title: 'Большое мясо в лаваше',
    price: '37 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img4,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 5,
    info: 'Мангал',
    title: 'Картофель с костра',
    price: '25 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img5,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 6,
    info: 'Шашлык',
    title: 'Шашлык из свинины «BBQ» ',
    price: '54 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img6,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 7,
    info: 'Бургеры',
    title: 'Бургер с мясом и сыром «Чеддер»',
    price: 'от 80 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img7,
      alt: '',
      width: 275,
      height:180
    }
  },

  {
    id: 8,
    info: 'Бургеры',
    title: 'Сет «Z-Бургер»',
    price: 'от 110 грн',
    minus: '-',
    plus: '+',
    quantity: '',
    order: 'Заказать',
    image:{
      src: img8,
      alt: '',
      width: 275,
      height:180
    }
  },
]

class App extends React.Component {
render = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <NavBar items={navBarData} />
      </Col>
      <Col xs={12}>
        <Dishes items={DishesData} />
      </Col>
    </Row>
  </Container>
  )
}

export default App;
