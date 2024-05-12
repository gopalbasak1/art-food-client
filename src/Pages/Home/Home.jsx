import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import TopFood from "../../components/TopFood/TopFood";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../components/Spinner/Spinner";


const Home = () => {
  const {loading} = useContext(AuthContext);

  if(loading){
    return <Spinner/>
  }

    return (
        <div>
            <Banner/>
            <TopFood/>
        </div>
    );
};

export default Home;