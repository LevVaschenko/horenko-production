import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import logo from 'assets/logo.png'
import './Header.scss'
import Swiper from './Swiper'
import CustomModal from './Modal'
import '../Responsive/Desktop-responsive.scss'
import '../Responsive/Mobile-responsive.scss'
import '../Responsive/Tablet-responsive.scss'

const buttons = ['Компанія', 'Продукція', 'Статті', 'Рішення', 'Контакти']

function ResponsiveAppBar() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSwiperHidden, setIsSwiperHidden] = useState(false)

    const handleContactButtonClick = () => {
        setIsModalOpen(true)
    }

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
        setIsSwiperHidden(!isSwiperHidden)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <AppBar position="static" className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                <Container className="header-container">
                    <Toolbar disableGutters className="toolbar">
                        <img src={logo} className="logo" />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}
                            className="buttons-container"
                        >
                            {buttons.map((page) => (
                                <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <div className="contacts-container">
                            <div className="phone-number">0 (800) 00-00-00</div>
                            <div className="contact-button" onClick={handleContactButtonClick}>
                                Зв'язатись
                            </div>
                            <CustomModal open={isModalOpen} onClose={handleCloseModal} />
                        </div>
                        <div className="translate">
                            <div className="ua-language">UA</div>
                            <div className="ru-language">RU</div>
                        </div>
                        <div className="menu-toggle" onClick={handleMenuToggle}>
                            <div className={`line ${isMenuOpen ? 'line-open' : ''}`}></div>
                            <div className={`line ${isMenuOpen ? 'line-open' : ''}`}></div>
                            <div className={`line ${isMenuOpen ? 'line-open' : ''}`}></div>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {isMenuOpen && <div className="menu-overlay" onClick={handleMenuToggle}></div>}
            {isMenuOpen && (
                <div className="menu-modal">
                    <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }} className="modal-hide">
                        {buttons.map((page) => (
                            <Button key={page} sx={{ my: 2, color: 'black', display: 'block' }} className="button">
                                {page}
                            </Button>
                        ))}
                    </Box>
                </div>
            )}
            {!isSwiperHidden && <Swiper />}
        </>
    )
}

export default ResponsiveAppBar