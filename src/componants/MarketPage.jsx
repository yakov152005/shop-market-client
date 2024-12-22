import { useEffect, useState } from "react";
import axios from "axios";
import {API_ADD_CARD, API_SERVER, MAX_PRICE, URL_API} from "../constants/Constant";
import "./MarketStyle.css";




export default function MarketPage({onAddToCart}) {
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const getCardImage = (card) => {
        if (card.image_uris && card.image_uris.small) {
            return card.image_uris.small;
        } else if (card.card_faces && card.card_faces.length > 0) {
            return card.card_faces[0].image_uris.small;
        } else {
            return "https://via.placeholder.com/150";
        }
    };

    const price = () => {
        return Math.floor(Math.random() * MAX_PRICE) + 1;
    }

    useEffect(() => {
        const fetchCardGameApi = async () => {
            try {
                const response = await axios.get(URL_API);
                const result = await response.data;
                const formatDataCard = result.data.map((card) => ({
                    name: card.name,
                    img: getCardImage(card),
                    releaseDate: card.released_at,
                    cost: price()
                }));

                setAllData(formatDataCard);
            } catch (error) {
                console.error("Error fetching data", error);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCardGameApi();
    }, []);


    const addToCart = async (name,img,releaseDate,cost) => {
        if (!name || !img || !releaseDate || !cost){
            setError("Null value");
            return;
        }

        try {
            const response = await axios.post(API_SERVER + API_ADD_CARD, {
                name,
                img,
                releaseDate,
                cost: parseInt(cost,10),
            });

            if (response.data.success){
                alert("This item Add to cart.");
                console.log(response.data);
                onAddToCart();
            }
            /*
            else {
                alert("This item is already in the cart.")
            }
             */
        }catch (error){
            setError("Error to add data");
            console.error("Failed to connection db");
        }

    }




    if (isLoading) {
        return <div>
            <strong style={{color:"blue"}}>Loading...</strong>
            <div className="spinner-border text-primary" role="status"></div>
        </div>;
    }

    if (error) {
        return <p style={{color:"red"}}>{error}</p>;
    }

    return (
        <div>
        <h1 style={{color:"blue"}}>Market Page</h1>
            <div className={"div-table"}>
                {allData.map((card, index) => (
                    <div className={"div-all-date"} key={index} >
                        <ul className={"ul-all-data"}>
                            <li><strong>Name:</strong> {card.name}</li>
                            <li><strong>Release Date:</strong> {card.releaseDate}</li>
                            <img src={card.img} alt={card.title} className={"li-img"}/><br/><br/>
                            <li style={{color: "red"}}><strong>Price: {card.cost}$</strong></li>
                            <button className={"btn btn-dark"}
                                    onClick={() => addToCart(card.name, card.img, card.releaseDate, card.cost)}
                            >Add to cart
                            </button>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
