import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Listings from"./Listing/Listings.jsx";
import products from "../data/product.js";
// import { Outlet } from "react-router-dom";

function Home(){

    return(
        <div className="min-h-screen">
           <Navbar></Navbar>
           <Header></Header>
           <div className="w-full px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
    <Listings key={product.id} product={product} />
))}

           </div>
           <Footer></Footer>
        </div>
    )
}

export default Home;