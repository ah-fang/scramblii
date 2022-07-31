import { useNavigate, useLocation } from "react-router-dom";
// useParams ^,
// import { getInvoice, deleteInvoice } from "../data";

export default function Game() {
    let navigate = useNavigate();
    let location = useLocation();
    // let params = useParams();
    // let thisGame = getGame(parseInt(params.gameId, 10)); 
    return (
        <main style={{ padding: '1rem' }}>
            {/* <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p> */}
            <p>
                <button
                    onClick={() => {
                        navigate('/games' + location.search);
                    }}
                >
                    Back to Games
                </button>
            </p>
        </main>
    )
}