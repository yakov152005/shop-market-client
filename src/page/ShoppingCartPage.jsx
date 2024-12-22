import { useEffect, useState } from "react";
import axios from "axios";
import { API_GET_ALL_CARDS, API_SERVER } from "../constants/Constant";
import "../css/shoopingCartStyle.css";

export default function ShoppingCartPage() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const fetchAllDate = async () => {
            try {
                const response = await axios.get(API_SERVER + API_GET_ALL_CARDS);
                if (response.data) {
                    const result = response.data;
                    setFormData(result);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchAllDate();
    }, []);

    return (
        <div>
            <div className="alert alert-warning" role="alert">
                <strong>Welcome to the Shopping Cart!</strong>
                <li className="li-item-cart">
                    <strong>Total price cart: </strong>
                </li>
                <li className="li-item-cart">
                    <button type="button" className="btn btn-success">But It Now!</button>
                </li>
            </div>

            <div className="div-table-cart">
                {formData.map((card) => (
                    <div className="div-all-data-cart" key={card.id}>
                        <ul className="ul-all-data-cart">
                            <li className="li-img-cart"><img src={card.img} alt={card.name}/></li>
                            <li className="li-item-cart"><strong>Name:</strong> {card.name}</li>
                            <li className="li-item-cart"><strong>Release Date:</strong> {card.releaseDate}</li>
                            <li className="li-item-cart"><strong>Quantity:</strong> {card.quantity}</li>
                            <li className="li-item-cart"><strong>Total price:</strong><strong
                                style={{color: "red"}}>{card.cost}$</strong></li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
