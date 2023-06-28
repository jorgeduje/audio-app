import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";


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
    {
        id:"detail",
        path: "/productDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id:"checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
    {
        id:"register",
        path: "/register",
        Element: RegisterContainer
    },
    {
        id:"login",
        path: "/login",
        Element: LoginContainer
    },
]