import BeInstructor from "../components/SectionsPages/BeInstructor";
import Counter from "../components/SectionsPages/Counter";
import FeedbackStudents from "../components/SectionsPages/FeedbackStudents";
import HeroSections from "../components/SectionsPages/HeroSections";
import PopularCourses from "../components/SectionsPages/PopularCourses";
import TrendingCourses from "../components/SectionsPages/TrendingCourses";
import Layout from "../components/Layouts/Layout ";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="osama" />
      </Head>
      <HeroSections />
      <Counter />
      <PopularCourses />
      <BeInstructor />
      <TrendingCourses />
      <FeedbackStudents />
    </>
  );
}
Home.Layout = Layout;
