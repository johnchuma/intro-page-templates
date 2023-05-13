import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Nav, Navbar, Row, Stack } from 'react-bootstrap'
import { BsArrowRight, BsCheck2 } from 'react-icons/bs'
import { FaBootstrap, FaFacebook, FaHtml5, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa'

import Space from '../widgets/space'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import Paragraph from '../widgets/paragraph'
import CustomButton from '../widgets/button'
import { links } from '../widgets/navbar'
import Heading2 from '../widgets/heading2'


const HomePage = () => {
  const socials = [
    {icon:<FaInstagram/>,name:"Instagram",path:""},
    {icon:<FaFacebook/>,name:"Facebook",path:""},
    {icon:<FaTwitter/>,name:"Twitter",path:""},
    {icon:<FaLinkedin/>,name:"Linkedin",path:""}
   
]
    return (
        <div>
              <Space/>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={7}>
                    <Heading fontWeight={700} text={`Website intro page templates`}/>
                    <Space/>
                    <Stack className=' ' direction='horizontal'>
                    <div className='d-flex p-1 justify-content-center align-items-center rounded-circle' style={{backgroundColor:secondaryColor}}>
                    <BsCheck2 className='text-white' /> 

                    </div>
                    <Paragraph className={`ms-2`} text={`100+ designs to choose from`}/>

                    </Stack>
                    </Col>
                    <Col className='d-none d-md-block'>
                    <Image fluid src='/images/welcome-to-team.png'/>
                    </Col>
                </Row>
                </Container>    
            <Space/>
<Container fluid>
<Row>
                <Col md={{offset:5,span:7}} className='p-5' style={{backgroundColor:primaryColor,borderRadius:0}}>
                    <Heading2  className={`text-italic text-white`} fontWeight={400}  text={`<em>Compatible with</em>`}/>
                    <Space height={30}/>
                    <Row className=' text-white'>
                        {[
                            {name:"React",icon:<FaReact  size={50}/>}
                        ,{name:"Bootstrap",icon:<FaBootstrap  size={50}/>},
                        ,{name:"JS & HTML",icon:<FaHtml5  size={50}/>}

                        ].map((item)=>{
                               return <Col  md={4}>
                                <Stack direction='horizontal'>
                                        {item.icon}  <Heading2  className={`ms-2 m-0 p-0 text-white`}  text={item.name}/>               
                                </Stack>
                                </Col>
                        })}
                       
                    </Row>
                
                
                </Col>
            </Row>
</Container>
          
            <div style={{backgroundColor:"#f2f2f2"}}>
            <Space/>
            <Container>
                  <Heading2  text={`Into page styles`}/>
                   <Row className='mt-5' >
                    {[{name:"",gif:"gif1.gif"},{name:"",gif:"gif2.gif"},{name:"",gif:"gif3.gif"},{name:"",gif:"gif4.gif"}].map((item)=>{
                        return <Col md="3" className='mb-4'>
                            <Image src={'/gifs/'+item.gif} fluid />
                        </Col>
                    })}
                   </Row>
            </Container>
            <Space/>
            </div>

             <div style={{}}>
            <Space/>
            <Container>
                <Row>
                    <Col className='mt-4' md={4}>
                    <Heading2  text={`Need developer ?`}/>
                    
                    <Paragraph className={`mb-4 mt-3`} text={`We can help you code your project`}/>
                    <CustomButton text={`Hire expert`}/>
                    </Col>
                    <Col className='mt-4' md={4}>
                    <Heading2  text={`Quick links`}/>
                     {links.map((item)=><Paragraph className={`mt-3`} text={item.name}/>)}

                    </Col>
                    <Col className='mt-4' md={4}>
                    <Heading2  text={`Connect with us`}/>
                    {socials.map((item)=><Stack className='mt-3' direction='horizontal'> 
                    {item.icon}
                    <Paragraph className={`ms-2`} text={item.name}/>
                  </Stack> )}
                    </Col>
                </Row>
                
                 
                  
            </Container>
            <Space/>
            </div>


        </div>
    )
}

export default HomePage
