import Hero from '@/components/Hero'
import FoodCategories from '@/components/FoodCategories'
import ExtraordinaryTaste from '@/components/ExtraordinaryTaste'
import Statistics from '@/components/Statistics'
import Menu from '@/components/Menu'
import Chefs from '@/components/Chefs'
import Testimonials from '@/components/Testimonials'
import BlogPosts from '@/components/BlogPosts'
import CreateBest from '@/components/createbest'
import WhyChooseUs from '@/components/whychose'
import RestaurantActive from '@/components/resturantActive'
import Header from '@/components/header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CreateBest/>
      <FoodCategories />
      <ExtraordinaryTaste />
      <Statistics />
      <Menu />
      <Chefs />
      <Testimonials />
      <RestaurantActive />
      <BlogPosts />
    </>
  )
}

