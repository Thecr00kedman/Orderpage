import { Box } from "@mui/material"
import styled from "@emotion/styled"

export const Content =styled(Box)((theme)=>({
    color:'#838383',
    fontSize:'13px'
    
}))
export const FooterContainer =styled(Box)((theme)=>({
    width:'100vw',
    display:'flex',
    background:'#F0FFE5',
    alignItems:'center',
    flexDirection:'row',
    padding:'1rem'
 
}))
export const FooterHeading =styled(Box)((theme)=>({
    display:'flex',
    fontWeight:'600',
    flexDirection:'column',
    padding:'0.5rem'
}))
export const FooterContent =styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'column',
    rowGap:'0.4rem'
}))
export const Section =styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'column',
    padding:'0.3rem',
    alignItems:'flex-start'

}))
export const SubFooter =styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    gap:'10px',
    padding:'0.3rem',
    alignItems:'flex-start',
   "& svg":{
    color:'black'
   }
}))
