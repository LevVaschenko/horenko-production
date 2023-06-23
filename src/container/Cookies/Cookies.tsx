import React, { useEffect, useState } from 'react'
import './Cookies.scss'

type Props = {}

const Cookies = (props: Props) => {
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(
        localStorage.getItem('cookiesAccepted') === 'true'
    )

    const handleAcceptButtonClick = () => {
        localStorage.setItem('cookiesAccepted', 'true')
        setCookiesAccepted(true)
    }

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true'
        setCookiesAccepted(cookiesAccepted)
    }, [])

    return !cookiesAccepted ? (
        <>
            <div className="cookies-container">
                <div className="cookies-info">
                    Використовуючи цей сайт, ви даєте згоду на роботу з файлами <span className="cookies-text">cookies.</span>
                </div>
                <button id="cookie-accept-button" onClick={handleAcceptButtonClick}>
                    Згоден
                </button>
            </div>
        </>
    ) : null
}

export default Cookies
