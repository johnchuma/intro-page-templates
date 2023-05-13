import React from 'react'

const Heading2 = ({fontWeight,fontSize,color,text,className}) => {
    return (
        <>
          <div className={className+` d-none d-md-block`} style={{fontWeight:fontWeight??700,lineHeight:1.0, fontSize:fontSize??"1.5vw",color:color??"black"}}   
        dangerouslySetInnerHTML={{__html:text}}/>
          <div className={className+` d-block d-md-none`} style={{fontWeight:fontWeight??700,lineHeight:1.0, fontSize:fontSize??"5.2vw",color:color??"black"}}   
        dangerouslySetInnerHTML={{__html:text}}/>
        </>
      
    )
}

export default Heading2