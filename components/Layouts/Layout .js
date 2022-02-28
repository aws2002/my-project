import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="content ">
      <Navbar/>
      {children}
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}
