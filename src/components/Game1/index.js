import React from "react";

// original Snake game
function Game1() {
    
    return ( 
        <div>
            <link rel="stylesheet" href="page.css" type="text/css" />

            <section>
            <h1>Snake Game</h1>
            <div>
            <canvas id="game1-canvas" width="320" height="240" />
            </div>

            <p>Control snake with arrow keys or WASD.</p>
            <p>Collect the food to grow and increase speed.</p>
            {/* <script type="text/javascript" src="./components/Game1/script.js"></script> */}
            <script type="text/javascript" src="./script.js"/>

            </section>
        </div>

    );
}

export default Game1;