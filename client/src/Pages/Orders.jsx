import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import {Breadcrumbs,Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OrderItem from "../Components/OrderItem/OrderItem";
import Product1 from '../assets/Product1.jpeg'
import { SidePanel,SideHeader,PageNavigation } from "./styles";
import Products from "../Components/Products/Products";
import { OrderSlide,SideContainer } from "./styles";
import {Box} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../Components/Footer/Footer";

const Orders = ()=>{
  

const width = window.innerWidth
const[innerWidth,setInnerWidth]= useState(width)
const[toggle,setToggle]=useState(false)
const OpenSideBar=()=>{
    setToggle(true)
}
const CloseSideBar=()=>{
    setToggle(false)
};

useEffect(()=>{
    setInnerWidth(true)
},[width])


return(
    <>
    <Banner />
    <Navbar />
    <Breadcrumbs className="navigation" separator={<ArrowForwardIosIcon sx={{fontSize:"small"}}/>} aria-label="breadcrumb">
    <Link>Home</Link>
    <Link>Profile</Link>
    <Link>Order & Refund</Link>
    </Breadcrumbs>
    <OrderSlide>
    <SideContainer>{
        innerWidth<768?(
            toggle?(
            <SideHeader className={toggle? "toggle mobile-navigation":""}>
            <Link onClick={CloseSideBar}><CloseIcon/></Link>
            <Link><AccountCircleIcon/>Hi Priyanka!</Link>
            <Link>My Account</Link>
            <Link>Order & Refund</Link>
            <Link>Wishlist</Link>
            <Link>Giftcards</Link>
            <Link>Service Memebership</Link>
            <Link>Refer To a Friend</Link>
            <Link>Help & Support</Link>
        </SideHeader>
            ):(
            <SidePanel>
            <Link><AccountCircleIcon onClick={OpenSideBar}/>Hi Priyanka!</Link>  
           </SidePanel>
            )
            
        ):(
            <SidePanel>
            <Link><AccountCircleIcon/>Hi Priyanka!</Link>
            <Link>My Account</Link>
            <Link>Order & Refund</Link>
            <Link>Wishlist</Link>
            <Link>Giftcards</Link>
            <Link>Service Memebership</Link>
            <Link>Refer To a Friend</Link>
            <Link>Help & Support</Link>
        </SidePanel>
        )}</SideContainer>
    
       <Box><OrderItem/></Box>
       <Box><Products/></Box>
    </OrderSlide>
    <PageNavigation><Box>1</Box><Box>2</Box><Box>3</Box></PageNavigation>
    <Footer/> 
       
    </>
    )
}
       
       
export default Orders