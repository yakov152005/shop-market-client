const URL_API = "https://api.scryfall.com/cards/search?order=cmc&q=c:red%20pow=3";

const API_SERVER = "http://localhost:8080/Market";
const API_ADD_CARD = "/addCardItem";
const API_GET_ALL_CARDS = "/getAllDetails";
const API_GET_HOW_MANY_ITEMS = "/getHowManyItemsInTheCart";

const NAV_HOME = "/homePage";
const NAV_MARKET = "/marketPage";
const NAV_CART = "/shoppingCartPage";

const MAX_PRICE = 300;

export {
    URL_API,
    MAX_PRICE
    , API_ADD_CARD, API_GET_ALL_CARDS, API_SERVER, API_GET_HOW_MANY_ITEMS,
    NAV_HOME, NAV_MARKET, NAV_CART,
};