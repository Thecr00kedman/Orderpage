import { Box,Typography } from "@mui/material"
import { BannerHeading } from "./styles"


export const Banner = ()=>{

    return(
        <BannerHeading><Box><Typography>Free Shipping on orders above 999/-</Typography></Box><Box><Typography>Call us On- +919876805120</Typography></Box></BannerHeading>
    )
}
export default Banner