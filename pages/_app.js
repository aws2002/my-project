import Layout from "../components/Layouts/Layout ";
import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <div className=" dark:bg-color_19">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
