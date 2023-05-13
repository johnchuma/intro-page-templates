import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Nav, Navbar, Row, Stack } from 'react-bootstrap'

import { useSpring,animated } from 'react-spring'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { AnimateComponent } from '../utils/animation'
import NavigationBar from '../widgets/navbar'

const LayoutPage = () => {
 
   
     
    return (
        <div >
        <NavigationBar/>
       <Outlet/>
        
     

        </div>
   
        
     
    )
}

export default LayoutPage
