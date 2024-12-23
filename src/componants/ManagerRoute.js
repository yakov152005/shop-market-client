import {Route, Routes} from "react-router-dom";
import MarketPage from "../page/MarketPage";
import ShoppingCartPage from "../page/ShoppingCartPage";
import {useEffect, useState} from "react";
import HomePage from "../page/HomePage";
import {API_GET_HOW_MANY_ITEMS, API_SERVER, IMG_PATH, NAV_CART, NAV_HOME, NAV_MARKET} from "../constants/Constant";
import axios from "axios";
import NavBar from "./NavBar";

export default function ManagerRoute() {
    const [item, setItem] = useState(0);

    useEffect(()=> {
        const fetchSizeMarket = async () => {
            try {
                const response = await axios.get(API_SERVER + API_GET_HOW_MANY_ITEMS);
                if (response.data.success){
                    const sizeData = parseInt(response.data.error);
                    setItem(sizeData);
                }
            }catch (error){
                console.error("Error to fetch data",error);
            }
        }
        fetchSizeMarket();
    },[]);

    const incrementItem = (items) => {
        setItem((prevItem) => prevItem + items);
    };


    const backgroundStyle = {
        backgroundImage: IMG_PATH,
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-y",
        backgroundAttachment: "scroll",
    };


    return (
        <div>
            <NavBar item={item}/>


            <div style={backgroundStyle}>
                <Routes>
                    <Route path={"*"} element={<HomePage/>}/>
                    <Route path={NAV_HOME} element={<HomePage/>}/>
                    <Route path={NAV_MARKET} element={<MarketPage onAddToCart={incrementItem}/>}/>
                    <Route path={NAV_CART} element={<ShoppingCartPage/>}/>
                </Routes>
            </div>
        </div>
    )
}