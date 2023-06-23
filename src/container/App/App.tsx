import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Cookies from 'container/Cookies/Cookies'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Cookies />
        </>
    )
}

export default App
