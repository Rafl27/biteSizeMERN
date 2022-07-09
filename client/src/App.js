import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import logo from './images/logo.png'
const App = () => {
    return (
        //Container centers everything 
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant = 'h2' align='center'>BiteSized</Typography>
                <img src={logo}/>
            </AppBar>
        </Container>
    )
}

export default App