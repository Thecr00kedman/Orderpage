import styled from "@emotion/styled"
import { Box } from "@mui/material"
export const ImageContainer= styled(Box)((theme)=>({

}))
export const ProductContainer= styled(Box)((theme)=>({
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      

}))
export const ProductMedia= styled(Box)((theme)=>({
     display:'flex',
     flexDirection:'column',
     border:"1px solid #0000004D",

}))
export const ProductContent= styled(Box)((theme)=>({
      padding:'0.5rem 1rem'
}))
export const Price= styled(Box)((theme)=>({
      display:"flex",
      flexDirection:'row',
      alignItems:'center',
      gap:"1rem",
      "& p:nth-child(1)":{
        fontWeight:400,
        fontSize:'16px',
        lineHeight:"24px",
        textDecoration:'line-through',
        color:"#5E5A5AB2"
      },
      "& p:nth-child(2)":{
        fontWeight:600,
        fontSize:'20px',
        lineHeight:"30px",
        color:"#5E5A5A"
        

      }
}))
export const Name= styled(Box)((theme)=>({
    fontWeight:'500',

}))
export const About= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'

}))
export const Rating= styled(Box)((theme)=>({
    display:'flex',
    alignItems:'center',
    fontSize:'14px',
    fontWeight:'500',
    color:'#A5A1A1',
    "& svg":{
        color:'#E8CB10',
        fontSize:'16px'
    }
}))
export const Type= styled(Box)((theme)=>({
    fontSize:'14px',
    color:'#838383',
    fontWeight:'400',
}))
export const ProductAction= styled(Box)((theme)=>({
    display:'flex',
    gap:'10px',
    font:'1rem',
    "& button":{
        background:'#165315',
        width:'137px',
        borderRadius:'10px',
        color:'white',
        fontWeight:'600',
        fontSize:'14px',
        lineHeight:'21px',
        height:'37px',
        border:'1px'
    },
    "& button:nth-child(2)":{
        background:'none',
        width:'137px',
        borderRadius:'10px',
        color:'#165315',
        fontWeight:'600',
        fontSize:'14px',
        lineHeight:'21px',
        border:'1px solid #165315',
        height:'37px',
    }
}))