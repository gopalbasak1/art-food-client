import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import TopFood from "../../components/TopFood/TopFood";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../components/Spinner/Spinner";
import BestFood from "../../components/BestFood/BestFood";
import Facility from "../../components/Facility/Facility";
import { Helmet } from "react-helmet";


const Home = () => {
  const {loading} = useContext(AuthContext);

  if(loading){
    return <Spinner/>
  }

    return (
        <div>
          <Helmet>
            <title>Art Food | Home</title>
          </Helmet>
            <Banner/>
            <TopFood/>
            <Facility/>
            <BestFood/>
        </div>
    );
};

export default Home;