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

class App extends React.Component {
render = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <NavBar items={navBarData} />
      </Col>
      <Col xs={12}>
        <Dishes />
      </Col>
    </Row>
  </Container>
  )
}

export default App;
