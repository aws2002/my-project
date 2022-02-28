import BeInstructor from "../components/SectionsPages/BeInstructor";
import Counter from "../components/SectionsPages/Counter";
import FeedbackStudents from "../components/SectionsPages/FeedbackStudents";
import HeroSections from "../components/SectionsPages/HeroSections";
import PopularCourses from "../components/SectionsPages/PopularCourses";
import TrendingCourses from "../components/SectionsPages/TrendingCourses";
import ToggleDarkMode from "../components/Tools/ToggleDarkMode";
export default function Home() {
  
  return (
    <>
    <HeroSections/>
    <Counter/>
    <PopularCourses/>
    <BeInstructor/>
    <TrendingCourses/>
    <FeedbackStudents/>
    </>
  );
}
