
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// REWORK THIS AS A COMPONENT, OR COMMIT TO ITS BEING  A PAGE AND CONDITIONALLY RENDER GAME CANVAS + LOGIC BY ID


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { useNavigate, useLocation } from "react-router-dom";
// import { Game } from "phaser";
// useParams ^,

export default function SingleGame() {
    let navigate = useNavigate();
    let location = useLocation();
    // let params = useParams();
    // ^ use the game id from params in url to display correct game
    // let thisGame = getGame(parseInt(params.gameId, 10)); 
    return (
        <main style={{ padding: '1rem' }}>
            <canvas height='300'></canvas>
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