import Layout from "../components/Layouts/Layout ";
import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MyApp({ Component, pageProps }) {

  const Layout=Component.Layout || EmptyLayout
  return (
    <div className=" dark:bg-color_19">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
const EmptyLayout=({children})=><>{children}</>