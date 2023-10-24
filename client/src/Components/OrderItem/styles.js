import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MainContainer= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem'
}))
export const Main= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    border:'1px solid #D9D9D9',
    "& div":{
        padding:'5px 12px',
    },
    "& div:nth-child(1)":{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        '@media only screen and (max-width: 768px)': {
            display:'flex',
            flexDirection:'column',
          },
    },
    "& a":{
        textDecoration:'none',
        color:'black',
        fontWeight:600,
        fontSize:'16px',
        
    },

}))
export const Header= styled(Box)((theme)=>({

}))
export const ItemDetail= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:"column",
    
    
}))
export const TopLeft= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    flex:1,
}))
export const TopRight= styled(Box)((theme)=>({

}))
export const OrderDetails= styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    background:'#F0FFE5',
    textAlign:'left',
    width:'100%',
   
    "& div:nth-child(2)":{
        display:'flex',
        flexDirection:'column',
        flexGrow:'1',
        "& div":{
            display:'flex',
            flexDirection:'row',
            gap:'9px', 
            padding:'0.2rem 1rem',
            
            '@media only screen and (max-width: 768px)': {
                flexDirection:'column',
              }, 
            "& p":{
                fontWeight:400
            }
        },
    }, 
}))
export const Productname= styled(Box)((theme)=>({
   

}))
export const OrderAction= styled(Box)((theme)=>({
   display:'flex',
   flexDirection:'column',
   padding:'1rem',
   "& a":{
    padding:'0.5rem'
   },
   '@media only screen and (max-width: 768px)': {
     "& div":{
        "& a":{
            fontSize:"13px"   
        },
        "& svg":{
            fontSize:"13px"   
        }     }
}, 
"& p":{
    fontWeight:400
}

}))