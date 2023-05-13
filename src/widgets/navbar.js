import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Heading from './heading'
import Paragraph from './paragraph'

import Space from './space'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import CustomButton from './button'
import Heading2 from './heading2'
export const links = [{name:"Styles",path:""},{name:"How to use",path:""},{name:"Privacy policy",path:""},,{name:"Support",path:""}];
const NavigationBar = () => {
    return (
       <>
       <Space height={40}/>
       <Navbar expand="md" >
        <Container>
        <Navbar.Brand >
            <Heading2 fontWeight={700}  text={`Weipt`}/>
        </Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className='ms-auto'>
        <Nav className='ms-auto d-flex align-items-center'>
            {
                links.map((item)=>{
                  return <Nav.Link className='me-3'><Paragraph text={item.name}/></Nav.Link>

                })
            }
         <CustomButton text={`Buy template`}/>           
        </Nav>
        </Navbar.Collapse>
        

        </Container>
       </Navbar>
       </>
    )
}

export default NavigationBar
