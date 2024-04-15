import React from 'react' 
import Header from '../header'
import Footer from '../Fotter/footer'
import Routers from '../../../routers/routers'
const Layout = () => {
return (
<>

<Header></Header>
<div>
    <Routers></Routers>

</div>

<Footer></Footer>



</>
)
}
export default Layout