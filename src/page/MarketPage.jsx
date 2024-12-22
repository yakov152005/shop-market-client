import {useEffect, useState} from "react";
import axios from "axios";
import {API_ADD_CARD, API_SERVER, MAX_PRICE, URL_API} from "../constants/Constant";
import "../css/MarketStyle.css"

export default function MarketPage({onAddToCart}) {
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [itemCounts, setItemCounts] = useState({});



    useEffect(() => {
        const fetchCardGameApi = async () => {
            try {
                const response = await axios.get(URL_API);
                const result = await response.data;
                const formatDataCard = result.data.map((card, index) => ({
                    id: index,
                    name: card.name,
                    img: getCardImage(card),
                    releaseDate: card.released_at,
                    cost: price(),
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


    const addToCart = async () => {

        const selectedItems = allData
            .filter((card) => itemCounts[card.id] > 0)
            .map((card) => ({
                name: card.name,
                img: card.img,
                releaseDate: card.releaseDate,
                cost: (card.cost * itemCounts[card.id]),
                quantity: itemCounts[card.id],
            }));

        if (selectedItems.length === 0 ) {
            setError("No items selected");
            return;
        }
            try {
                const response = await axios.post(API_SERVER + API_ADD_CARD,selectedItems);
                if (response.data.success){
                    alert("The items is added to the cart!");
                    const totalItems = Object.values(itemCounts).reduce((total, count) => total + count, 0);
                    onAddToCart(totalItems);
                    setItemCounts({})
                }
            }catch (error){
                console.error("Error to post data",error);
                setError("Error to post data");
            }

    };

    const handleChange = (action, cardId) => {
        switch (action) {
            case 'incrementItem':
                setItemCounts((prevCounts) => ({
                    ...prevCounts,
                    [cardId]: (prevCounts[cardId] || 0) + 1,
                }));
                break;
            case 'decrementItem':
                setItemCounts((prevCounts) => ({
                    ...prevCounts,
                    [cardId]: Math.max((prevCounts[cardId] || 0) - 1, 0),
                }));
                break;
            default:
                console.error("Unknown action:", action);
                break;
        }
    };

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
    };


    if (isLoading) {
        return (
            <div>
                <strong style={{color: "black"}}>Loading...</strong>
                <div className="spinner-border text-dark" role="status"></div>
            </div>
        );
    }

    if (error) {
        return <p style={{color: "red"}}>{error}</p>;
    }

    const valueStyle = {
        color:"blue",
        font:"bold"
    }

    return (
        <div>
            <div className="alert alert-dark" role="alert">
                <strong style={{color:"blue"}}>Welcome to the Market!</strong>
            </div>
            <div className={"div-table"}>
                {allData.map((card) => (
                    <div className={"div-all-data"} key={card.id}>
                        <ul className={"ul-all-data"}>
                            <li><strong style={valueStyle}>Name:</strong> <strong>{card.name}</strong></li>
                            <li><strong style={valueStyle}>Release Date:</strong><strong>{card.releaseDate}</strong></li>
                            <img src={card.img} alt={card.name} className={"li-img"}/><br/><br/>
                            <li style={valueStyle}>
                                <strong>Price: {card.cost * itemCounts[card.id] || card.cost}$</strong></li>
                            <div className={"btn btn-primary"}>
                                <button className={"btn btn-dark"}
                                        onClick={() => handleChange('incrementItem', card.id)}><strong>+</strong>
                                </button>
                                <button className={"btn btn-dark"} onClick={() => addToCart()}><strong>Add to cart</strong>

                                </button>
                                <button className={"btn btn-dark"}
                                        onClick={() => handleChange('decrementItem', card.id)}><strong>-</strong>
                                </button>
                            </div>
                            <br/><input className={"btn btn-primary"} value={itemCounts[card.id] || 0} disabled={true} size={"1"}/>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
