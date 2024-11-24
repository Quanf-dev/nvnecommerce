import title from "../../assets/logo/title.png"
import ProductCard from "../productCard/ProductCard";



const ShockSellingProducts = () =>{
    return(
       
        <div className=" mt-16"> 
        <img src={title} alt="Khuyến mãi sốc"  className="relative left-1/2 -translate-x-1/2"/>  
        <div className="flex flex-wrap gap-6 mt-7"> <ProductCard className="border-red-700 border-2"/> <ProductCard/><ProductCard/><ProductCard/><ProductCard/></div>

        </div>
    )
}

export default ShockSellingProducts;