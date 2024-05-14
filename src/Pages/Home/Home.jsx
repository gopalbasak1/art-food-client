import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import TopFood from "../../components/TopFood/TopFood";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../components/Spinner/Spinner";
import BestFood from "../../components/BestFood/BestFood";
import Facility from "../../components/Facility/Facility";
import Sponsor from "../../components/Sponsor/Sponsor";
import Categories from "../../components/Category/Categories";




const Home = () => {
  const {loading} = useContext(AuthContext);

  if(loading){
    return <Spinner/>
  }

    return (
        <div>

            <Banner/>
            <TopFood/>
            <Facility/>
            <Categories/>
            <BestFood/>
            <Sponsor/>
        </div>
    );
};

export default Home;