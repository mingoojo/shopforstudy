import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, NavDropdown, Row, Col} from 'react-bootstrap';
import logo from './logo1.svg';
import './App.css';
import mainpic from './images/main-bg.jpg'
import {dater, imageroot, linkess} from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom'
import styled from 'styled-components'

function App() {
  let [shoes, setShoes] = useState(dater)
  let [linkes, setLinkes] = useState(linkess)
  let navigate = useNavigate();



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Min's Day </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail1') }}>detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element = {
        <div>
            <div>main페이지임</div>
            <div className='main-bg' style={{backgroundImage : 'url('+mainpic+')'}}>
            </div>
            <Container>
              <Row>
                {
                  shoes.map(function (a, i) {
                    return (
                      <Card shoes={shoes[i]} imageroot={imageroot[i]} linkes = {linkes[i]} />
                    )
                  })
                }
              </Row>
            </Container>
        </div>
        } />
        <Route path='/detail/:id' element = {<Detail01 shoes={shoes} imageroot={imageroot}/>} />
        {/* <Route path='/detail2' element = {<Detail01 shoes={shoes[1]} imageroot={imageroot[1]}/>} /> */}
        {/* <Route path='/detail3' element = {<Detail01 shoes={shoes[2]} imageroot={imageroot[2]}/>} /> */}
        <Route path='/*' element = {<div>없는페이지요~ 뒤로가셈~</div>} />
      </Routes>
      

      
    </div>
  );
}


function Card(props){
  return(
      <Col className='item-sec'>
        <Link to={props.linkes}><img className='item_mg' src={props.imageroot} /></Link>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </Col>
  )
}

function Detail01(props){
  
  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')
  useEffect(()=>{
    setTimeout(()=>{setAlert(false)}, 2000)
    console.log('1')
    return()=>{
      console.log('by')
    }
  }, []);



  let {id} = useParams();

  return(
    <div className="container">
      {
        alert == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null
      }
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={props.imageroot[id]} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <Link to={'/'}><button className='btn btn-danger'>뒤로가기</button></Link>
        </div>
      </div>
    </div> 
  )
}

export default App;
