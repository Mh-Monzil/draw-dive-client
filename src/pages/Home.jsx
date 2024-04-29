import Banner from "../component/Banner";
import CategoriesSection from "../component/CategoriesSection";
import CraftItemsSection from "../component/CraftItemsSection";


const Home = () => {
    return (
        <div>
            <Banner />
            <CraftItemsSection />
            <CategoriesSection />
        </div>
    );
};

export default Home;