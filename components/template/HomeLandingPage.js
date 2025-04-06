
// components
import AboutSparkCode from "../module/homePage/AboutSparkCode";
import Articles from "../module/homePage/Articles";
import ContactUs from "../module/homePage/ContactUs";
import CustomerReviews from "../module/homePage/CustomerReviews";
import Introduction from "../module/homePage/Introduction";
import Projects from "../module/homePage/Projects";
import SparkCode from "../module/homePage/SparkCode";



export default function HomeLandingPage() {

    return (
        <>
          <Introduction/>
          <SparkCode/>
          <CustomerReviews/>
          <Projects/>
          <AboutSparkCode/>
          <Articles/>
          <ContactUs/>
        </>
    )
}