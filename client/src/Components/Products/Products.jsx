import {Box, Button,Typography } from "@mui/material"
import Product1 from '../../assets/Product1.jpeg'
import { ImageContainer,ProductContainer,ProductMedia,ProductContent,Price,About,Type,Name,Rating,ProductAction } from "./styles"
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MainContainer } from "../OrderItem/styles";



export const Products = ()=>{


    return(

       <MainContainer>
         <ProductContainer>
            <ProductMedia>
            <FavoriteBorderIcon/>
            <ImageContainer>
              <img style={{height:'216px', width:'216px', objectFit:'contain'}}src={Product1} alt="Product" />
            </ImageContainer>
            <Button variant='contained'>View product</Button>
        </ProductMedia>
        <ProductContent>
            <Name>Lorem ipsum dolor sit </Name>
            <Type>Indoor Plant, Low maintenance</Type>
              <About>
                  <Price><Typography>₹ 359</Typography><Typography>₹ 299</Typography></Price>
                  <Rating>4.9&nbsp;<StarIcon/></Rating>
              </About>
        </ProductContent>
        <ProductAction>
            <button>-&nbsp;&nbsp;Add to cart&nbsp;&nbsp;+</button>
            <button variant="outlined">Buy on rent</button>
        </ProductAction>
        </ProductContainer>
        <ProductContainer>
            <ProductMedia>
            <FavoriteBorderIcon/>
            <ImageContainer>
              <img style={{height:'216px', width:'216px', objectFit:'contain'}}src={Product1} alt="Product" />
            </ImageContainer>
            <Button fullWidth variant='contained'>View product</Button>
        </ProductMedia>
        <ProductContent>
            <Name>Lorem ipsum dolor sit </Name>
            <Type>Indoor Plant, Low maintenance</Type>
              <About>
                  <Price><Typography>₹ 359</Typography><Typography>₹ 299</Typography></Price>
                  <Rating>4.9&nbsp;<StarIcon/></Rating>
              </About>
        </ProductContent>
        <ProductAction>
            <button>-&nbsp;&nbsp;Add to cart&nbsp;&nbsp;+</button>
            <button variant="outlined">Buy on rent</button>
        </ProductAction>
        </ProductContainer>
        <ProductContainer>
            <ProductMedia>
            <FavoriteBorderIcon/>
            <ImageContainer>
              <img style={{height:'216px', width:'216px', objectFit:'contain'}}src={Product1} alt="Product" />
            </ImageContainer>
            <Button fullWidth variant='contained'>View product</Button>
        </ProductMedia>
        <ProductContent>
            <Name>Lorem ipsum dolor sit </Name>
            <Type>Indoor Plant, Low maintenance</Type>
              <About>
                  <Price><Typography>₹ 359</Typography><Typography>₹ 299</Typography></Price>
                  <Rating>4.9&nbsp;<StarIcon/></Rating>
              </About>
        </ProductContent>
        <ProductAction>
            <button>-&nbsp;&nbsp;Add to cart&nbsp;&nbsp;+</button>
            <button variant="outlined">Buy on rent</button>
        </ProductAction>
        </ProductContainer>
       </MainContainer>
    )
}

export default Products