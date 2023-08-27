import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='#'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='#'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='#/'>
                <img src="/img/instagram1.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <h2>Desarrollado con 🖤 por Santiago Barón Castaño</h2>
    </footer>
}

export default Footer
