const URL_API = "https://api.scryfall.com/cards/search?order=cmc&q=c:red%20pow=3";

const API_SERVER = "http://localhost:8080/market";
const API_ADD_CARD = "/add-cart-item";
const API_GET_ALL_CARDS = "/get-all-details";
const API_GET_HOW_MANY_ITEMS = "/get-how-many-items-cart";
const API_GET_TOTAL_PRICE_CART = "/get-total-price-cart";

const NAV_HOME = "/homePage";
const NAV_MARKET = "/marketPage";
const NAV_CART = "/shoppingCartPage";

const IMG_PATH = "url('/image/backGround.png')";
const IMG_PATH_DEF = "https://via.placeholder.com/150";

const MAX_PRICE = 300;

export {
    URL_API,
    MAX_PRICE
    , API_ADD_CARD, API_GET_ALL_CARDS, API_SERVER, API_GET_HOW_MANY_ITEMS,API_GET_TOTAL_PRICE_CART,
    NAV_HOME, NAV_MARKET, NAV_CART,
    IMG_PATH,IMG_PATH_DEF,
};