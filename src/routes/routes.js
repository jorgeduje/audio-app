import HomeContainer from "../components/pages/home/HomeContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";


export const menuRoutes = [
    {
        id:"home",
        path: "/",
        Element: HomeContainer
    },
    {
        id:"products",
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
]