// Footer.jsx
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const copyrightColor = { backgroundColor: 'rgb(34, 38, 57)' };

    const location = useLocation();
    const isHome = location.pathname === '/';
  
    // Styles for the ombre effect, which will be used only on the Home page
    const ombreStyle = {
      backgroundImage: isHome ? 'linear-gradient(to top, rgba(34, 32, 258, 0.75), transparent)' : 'none',
      position: isHome ? 'absolute' : 'relative',
      bottom: isHome ? '0' : 'auto'
    };
  

    return (
        <footer className={`w-full text-center text-white ${isHome ? 'fixed' : ''}`} style={ombreStyle}>
                <div className=" py-5 bg-reversed-ombre flex justify-center items-center">

                    <a href="https://www.linkedin.com/in/isabella-petrache-928a79252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="mx-2 text-white">
                        <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
      
                </div>
    
        {/* <!--Copyright section--> */}
        <div
          style={copyrightColor} className="bg-neutral-300 p-4 text-center text-white">
          © 2023 isabella.petrache@live.de
          
        </div>
      </footer>
    );
};

export default Footer;
