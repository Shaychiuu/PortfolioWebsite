// App or main layout component
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children} {/* Your page content goes here */}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;