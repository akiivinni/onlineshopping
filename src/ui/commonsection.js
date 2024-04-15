import React from 'react'
import { Container } from 'reactstrap';
import '../styles/common.css'


const CommonSection = ({title})=>
{
    return <section className="Common_Section">

<Container className='text-center'>
    <h1>{title}</h1>

</Container>

    </section>
}

export default CommonSection;