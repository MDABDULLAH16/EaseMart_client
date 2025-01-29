import Banner from "@/components/Banner";
import ProductsPage from "./product/page";
import Stat from "@/components/Stat";

const HomePage = () => {
  return (
    <div>
      {/* <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1> */}
      <Banner></Banner>
      <ProductsPage/>
      <Stat/>
    </div>
  );
};

export default HomePage;
