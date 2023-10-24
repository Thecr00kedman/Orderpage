import { Navcontainer,LogoContainer,Right,MobileNav} from "./styles"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar= ()=>{
    const width = window.innerWidth

    useEffect(()=>{
       setInnerWidth(width)
    },[width])
    const[innerWidth,setInnerWidth]= useState(width)
    const [toggle,setToggle]=useState(false)
    const handleOpen=()=>{
        setToggle(true)
    }
    const handleClose=()=>{
        setToggle(false)
    }
    console.log(innerWidth)


    return(
        <Navcontainer>
            {innerWidth<768?(
               toggle?(
            <MobileNav className={toggle?"animation mobile-navigation":""}>
             <CloseIcon onClick={handleClose}/>          
            <LogoContainer><Link><img src={Logo} alt="Logo" style={{height:'100%',width:'100%',objectFit:'cover'}}/><Typography variant='h5'>Chaperone</Typography></Link></LogoContainer>
            <ul className="Lists">
            <li><a href="#">Home</a></li>
            <li><a href="#">Plants & Pots</a></li>
            <li><a href="#">Tools<KeyboardArrowDownIcon/></a></li>
            <li><a href="#">Our Services<KeyboardArrowDownIcon/></a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">FAQs</a></li>
            </ul>  
           <Right>
            <Link>My Profile</Link>
            <Link>My Cart</Link>
           </Right>
                </MobileNav>
               ):(
                <Box style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
                    <MenuIcon onClick={handleOpen}/>
                    <LogoContainer><Link><img src={Logo} alt="Logo" style={{height:'100%',width:'100%',}} /><Typography variant='h5'>Chaperone</Typography></Link></LogoContainer>
                    <Right>
                       <Link><PersonOutlineIcon/>My Profile</Link>
                       <Link><ShoppingCartIcon/>Cart</Link>
                    </Right>
                </Box>
               )
            ):(
                <Navcontainer>
                
            <LogoContainer><Link><img src={Logo} alt="Logo" /><Typography variant='h5'>Chaperone</Typography></Link></LogoContainer>
            <ul className="Lists">
            <li><a href="#">Home</a></li>
            <li><a href="#">Plants & Pots</a></li>
            <li><a href="#">Tools<KeyboardArrowDownIcon/></a></li>
            <li><a href="#">Our Services<KeyboardArrowDownIcon/></a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">FAQs</a></li>
            </ul>
            
           <Right>
            <Link><PersonOutlineIcon/>My Profile</Link>
            <Link><ShoppingCartIcon/>Cart</Link>
           </Right>
            
                </Navcontainer>
                
            )
            }
        </Navcontainer>
    )
}

export default Navbar