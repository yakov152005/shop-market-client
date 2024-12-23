import {NAV_CART, NAV_HOME, NAV_MARKET} from "../constants/Constant";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


export default function NavBar({item}){
    const navigate = useNavigate();
    const[valInput,setValInput] = useState(0);
    const[disabled,setDisabled] = useState(true);



    const handleChange = (event) => {
        setValInput(event.target.value);
        setDisabled(false);
    }

    const handleClicked = () => {
        navigate(NAV_MARKET, { state: { value: Number(valInput) } });
    };


    return(
        <div>
            <nav className="navbar" style={{background: "#9f9f9f", borderRadius: "5px"}}>
                <div><br/></div>
                <h1 style={{color: "blue", fontFamily: 'Brush Script MT'}}><strong>Market</strong></h1>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <div>
                        <nav className="navbar bg-body-tertiary" style={{borderRadius:"5px"}}>
                            <div className="container-fluid">
                                <form className="d-flex" role="search" >
                                    <strong style={{color:"blue"}}>enter cost 1-300 for filter or 0 for return</strong>
                                    <input className="form-control me-2" type="number" placeholder="Search by price"
                                           onChange={handleChange}
                                           value={valInput}
                                           aria-label="Search"
                                           style={{borderRadius:"11px"}}
                                    />

                                    <button className="btn btn-primary"
                                            type="button"
                                            disabled={valInput ? disabled : true}
                                            onClick={handleClicked}
                                            style={{border: "1px solid black"}}>
                                        Search
                                    </button>

                                </form>
                            </div>
                        </nav>
                    </div>


                    <div>
                        <button type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    navigate(NAV_HOME)
                                }}>Home
                            <br/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <button type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    navigate(NAV_MARKET)
                                }}>Market
                            <br/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-cash-coin" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                <path
                                    d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                <path
                                    d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <button type="button"
                                className="btn btn-primary position-relative"
                                onClick={() => {
                                    navigate(NAV_CART)
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
            </nav>
        </div>
    )
}