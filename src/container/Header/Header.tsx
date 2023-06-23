import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import logo from 'assets/logo.png'
import './Header.scss'
import Swiper from './Swiper'

const buttons = ['Компанія', 'Продукція', 'Статті', 'Рішення', 'Контакти']

function ResponsiveAppBar() {
    return (
        <>
            <AppBar position="static" className='header'>
                <Container className='header-container'>
                    <Toolbar disableGutters>
                        <img src={logo} className='logo' />
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='buttons-container'>
                            {buttons.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    className='button'
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <div className='contacts-container'>
                            <div className="phone-number">
                                0 (800) 00-00-00
                            </div>
                            <div className="contact-button">
                                Зв'язатись
                            </div>
                        </div>
                        <div className="translate">
                            <div className="ua-language">
                                UA
                            </div>
                            <div className="ru-language">
                                RU
                            </div>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Swiper />
        </>
    )
}

export default ResponsiveAppBar