
import Hero from "@/components/landingPage/Hero";
import CreateBest from "@/components/landingPage/createbest";
import FoodCategories from "@/components/landingPage/FoodCategories";
import ExtraordinaryTaste from "@/components/landingPage/ExtraordinaryTaste";
import Statistics from "@/components/landingPage/Statistics";
import Menu from "@/components/landingPage/Menu";
import Chefs from "@/components/landingPage/Chefs";
import Testimonials from "@/components/landingPage/Testimonials";
import ResturantActive from "@/components/landingPage/resturantActive";
import BlogPosts from "@/components/landingPage/BlogPosts";
import Header from "@/components/headers/header";

export default function Home() {
  return (
   <>
    {/* landing Page */}
      <Header />
      <Hero />
      <CreateBest/>
      <FoodCategories />
      <ExtraordinaryTaste />
      <Statistics />
      <Menu />
      <Chefs />
      <Testimonials /> 
      <ResturantActive />
      <BlogPosts />
 {/* landing Page end*/}

   </>
  );
}
