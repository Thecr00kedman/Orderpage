import { Box,Typography,Container } from "@mui/material"
import { Main,TopLeft,TopRight,Productname,Header,ItemDetail,OrderAction,MainContainer } from "./styles"
import Image from '../../assets/Image.png'
import { Link } from "react-router-dom"
import Rectangle from '../../assets/image149.png'
import { OrderDetails } from "./styles"
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const OrderItem =()=>{

    return(
    <MainContainer>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>In Transit</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Link>Cancel Product</Link>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>Delivered</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Box sx={{border:'1px solid #D9D9D9',justifyContent:'center'}}><Link>Return Product</Link></Box>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><Link>Return Available Till 7th october</Link><Box sx={{display:'flex',alignItems:'center'}}><Link>Rate</Link>:&nbsp;&nbsp;<StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></Box></Box>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>In Transit</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Link>Cancel Product</Link>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>In Transit</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Link>Cancel Product</Link>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>In Transit</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Link>Cancel Product</Link>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    <Main>
       <Header> 
            <TopLeft><img src={Image} style={{height:"40px", width:'40px'}}alt="image" /><Box><Typography>In Transit</Typography>On Mon 5 oct</Box></TopLeft>
            <TopRight><Typography>Number of Products</Typography><Typography>Total amount:659</Typography></TopRight>
       </Header>
      <ItemDetail>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Monsterra Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:3</Typography>
            </Box>
            <Box>
            <Typography>Amount:259</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>BrokenHeart Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:2</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
           <Box>
           <OrderDetails>
        <Container><img style={{height:'47px', width:'47px',objectFit:'contain'}} src={Rectangle} alt="image" /></Container>
        <Box>
        <Productname>
            <Box>Snake Plant</Box>
         </Productname>  
        <Box>
            <Box>
            <Typography>Size:Small</Typography>
            <Typography>Color:XYZ</Typography>
            <Typography>Pot:XYZ</Typography>
            </Box>
            <Box>
            <Typography>Qty:5</Typography>
            </Box>
            <Box>
            <Typography>Amount:200</Typography>
            </Box>
        </Box>
        </Box>
           </OrderDetails>
           </Box>
      </ItemDetail>
      <OrderAction>
      <Link>Cancel Product</Link>
      <Link>Help & Support</Link>
      </OrderAction>
    </Main>
    </MainContainer>
    )
}
export default OrderItem