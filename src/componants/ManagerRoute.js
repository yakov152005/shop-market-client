import {Route, Routes, useNavigate} from "react-router-dom";
import MarketPage from "./MarketPage";
import ShoppingCartPage from "./ShoppingCartPage";
import { useState} from "react";


export default function ManagerRoute() {
    const navigate = useNavigate();
    const [item, setItem] = useState(0);

    const incrementItem = () => {
        setItem((prevItem) => prevItem + 1);
    };

    return (
        <>

            <div><br/></div>
            <div className="btn-group" role="group" aria-label="Basic example" >
                <div>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/marketPage")
                            }}>Market
                    </button>
                </div>

                <div>
                    <button type="button"
                            className="btn btn-primary position-relative"
                            onClick={() => {
                                navigate("/shoppingCartPage")
                            }}>Shopping Cart
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-cart4" viewBox="0 0 16 16">
                            <path
                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {item}
                            <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                </div>
            </div>

            <Routes>
                <Route path={"/marketPage"} element={<MarketPage onAddToCart={incrementItem}/>}/>
                <Route path={"/shoppingCartPage"} element={<ShoppingCartPage/>}/>
            </Routes>
        </>
    )
}