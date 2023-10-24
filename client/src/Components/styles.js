import {Box,styled} from '@mui/material'

export const Navcontainer = styled(Box)((theme)=>({
    width:'100%',
    background:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:'1rem',
    zIndex:2,
    position:'sticky',
    top:'0',
    
    "& li":{
        padding:'0.2rem 1rem',
        listStyleType: 'none',
        "& a":{
            display:'flex',
            textDecoration:'none',
            fontWeight:'500',
            color:'black',
            alignItems:'center'
        }
    },
    ".Lists":{
     display:'flex',
     flexDirection:"row"
    },

  "& div":{
        "& img":{
            height:'50px',
            width:'50px',
            objectFit:'cover'
        }
    },
    '@media only screen and (max-width: 768px)': {
        display:"flex",
        flexDirection:"column",
        "& .Lists":{
            flexDirection:'column',
        }
      },
}));


export const LogoContainer =styled(Box)((theme)=>({
    "& a":{
    textDecoration:'none',
    display:'flex',
    flexDirection:'row',
    padding:'4px 7px',
    alignItems:'center',
    gap:'5px'
    },
    '@media only screen and (max-width: 900px)':{
    display:'none'
    }

}))
export const Right =styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
   
    '@media only screen and (max-width: 520px)':{
     flexDirection:'row',
     padding:'0.2rem',
     alignItems:'flex-start'
     
    },
    "& a":{
        display:'flex',
        textDecoration:'none',
        color:'black',
        flexDirection:'column',
        alignItems:'center',
        padding:'0.5rem',
        fontWeight:'500',
       
    },
   
  
}))
export const BannerHeading=styled(Box)((theme)=>({
    display:'flex',
    flexDirection:'row',
    background:'#165315',
    width:'100%',
    color:'white',
    "& div":{
        textAlign:'right',
        flex:1,
        
    }

}))
export const MobileNav= styled(Box)((theme)=>({
    width:'55vw',
    height:'100vh',
    zIndex:'5',
    top:0,
    padding:'0.9rem',
    backgroundColor:'white',
    left:0,
    bottom:0,
    position:"absolute",
    alignItems:'flex-start',
    "& ul li a":{
        padding:'0.5rem'
    },
    "& a":{
        color:'black',
    },

}))