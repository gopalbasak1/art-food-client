import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import TopFood from "../../components/TopFood/TopFood";


const Home = () => {

    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <Banner/>
            <TopFood products={products}/>
        </div>
    );
};

export default Home;