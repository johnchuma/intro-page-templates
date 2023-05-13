import React from 'react'
import { primaryColor } from '../utils/brand_colors'

const CustomButton = ({text}) => {
    return (
        <>
                        <div style={{backgroundColor:primaryColor}} className=' px-4 pt-2 pb-2  btn border-0 shadow-none rounded-0 text-white '>{text}</div>

        </>
    )
}

export default CustomButton
