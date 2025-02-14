import Introduction from "../components/template/home/Introduction";
import SparkCode from "../components/template/home/SparkCode";
import AboutSparkCode from "../components/template/home/AboutSparkCode";
import Articles from "../components/template/home/Articles";
import CustomerReviews from "../components/template/home/CustomerReviews";
import ContactUs from "../components/template/home/ContactUs";

const HomePage = ()=>{

  return(

      <>

          <Introduction/>
          <SparkCode/>
          <CustomerReviews/>
          <AboutSparkCode/>
          <Articles/>
          <ContactUs/>

      </>

  )

}


export default HomePage;