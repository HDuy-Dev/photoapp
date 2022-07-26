import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './header.scss'
export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
            className='header__link header__title'
            href='https://youtube.com/easyfrontend'
            target="_blank"
            rel='noopener noreferrer'
            >Easy Frontend</a>
          </Col>
          <Col xs='auto'>
            <NavLink
            exact
            className='header__link'
            to='/photos'
            activeClassName="header__link--active"
            >
              Photo Page
            </NavLink>
          </Col>

        </Row>
      </Container>
    </header>
  )
}

