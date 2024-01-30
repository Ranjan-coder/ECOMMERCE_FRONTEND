import React from 'react'

const FooterCmp = () => {
    return (
        <div className='footerbgc'>
            <div id='socialicons'>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://wa.me/8249727499" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <div className='footercontent'>
                <div className='footer'>Copyright ©️ 2023 ishop,inc </div>
                <div className='footercontent2'>
                    <span className='footer'>Legal Stuff</span>
                    <span className='footer2'>|</span>
                    <span className='footer'>Privacy Policy</span>
                    <span className='footer2'>|</span>
                    <span className='footer'>Security</span>
                </div>
            </div>
        </div>
    )
}

export default FooterCmp