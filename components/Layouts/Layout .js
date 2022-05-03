import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import MultilanguageBtn from "../Tools/MultilanguageBtn";

export default function Layout({ children }) {
  return (
    <div className="content ">
      <Navbar/>
      <MultilanguageBtn/>
      {children}
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}


