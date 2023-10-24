import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const OrderSlide = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: 'row',
  padding:'1rem',
  gap:'6px',
  "@media only screen and (max-width: 520px)": {
    flexDirection: 'column'
  },
  "@media only screen and (max-width: 1020px)": {
    flexDirection: 'column'
  }
}))
export const SideContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: 'row',
  padding:'1rem',
  gap:'6px',
  "@media only screen and (max-width: 520px)": {
    flexDirection: 'column'
  },
  "@media only screen and (max-width: 1020px)": {
    flexDirection: 'column'
  }
}))
export const SideHeader = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'column',
    border:'none',
    borderRight:'1px solid black',
    paddingLeft:'1.2rem',
    alignItems:'flex-start',
    padding:'1rem',
    background:'black',
    position:'fixed',
    left:0,
    width:'50vw',
    top:"18%",
    transition:'all 0.03s ease-in',
    width:'50vw',
    zIndex:4,
    height:"100vh",
    "& a":{
        textDecoration:'none',
        color:'#000000',
        fontSize:'15px',
        alignItems:'flex-start',
        padding:'0.5rem',
        color:'white',
    },
    "& a:hover":{
        color:'blue',
        
     }
}))

export const SidePanel = styled(Box)((theme)=>({
    "& a":{
        textDecoration:'none',
        display:'flex',
        alignItems:'center',
        color:"black",
        fontSize:'20px',
       
    },
}))
export const PageNavigation = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
    padding:'1rem',
    gap:'5px',
    "& div:nth-child(1)":{
        border:'1px solid black',
        padding:'3px 11px',
        background:"black",
        borderRadius:"50%",
        color:'white',
        fontSize:"13px",

    },
    "& div":{
        border:'1px solid black',
        padding:'0px 8px',
        borderRadius:"50%",
        color:'black',
        fontSize:"13px",

    }
}))


