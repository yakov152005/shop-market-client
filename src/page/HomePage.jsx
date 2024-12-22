import "../css/HomePageStyle.css";
import {useNavigate} from "react-router-dom";
import {NAV_MARKET} from "../constants/Constant";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="floating-box">
                <h2>Welcome to MarketShop Gaming</h2>
                <p>
                    This is assignment 2 in the <strong>Internet Programming course,</strong>
                    Bachelor of Science in Computer Science{" "}</p>
                <p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="icon-link"
                       onClick={() => navigate(NAV_MARKET)}
                       style={{cursor: "pointer", textDecoration: "underline", color: "blue"}}>
                        Start Buy
                    </a>
                </p>
            </div>

            <div className="p-3 mb-2 bg-primary text-white">
                <strong>Welcome, This page Developed By: Yakov Ben HemoⒸ</strong>
            </div>
        </div>
    );
}
