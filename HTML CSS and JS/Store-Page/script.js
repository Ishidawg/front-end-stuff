var content = document.getElementById("container");
var home = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/script.css">
    </head>
    <body>
        <main class="home-container">
            <article class="home-article">
                <p class="home-text">
                    On Sif store, we got on hand all Witcher and Dark Souls Franchise!<br>
                    What you looking for? Use navegation bar to discovery games.
                </p>
            </article>
            <section class="home-games">
                <div class="home-witcher home-franchise">
                    <h1 class="home-franchise-txt">The Witcher Franchise</h1>
                    <ul class="home-games-box">
                        <li>The Witcher: Enhanced Edition</li>
                        <li>The Witcher 2: Assassins of kings</li>
                        <li>The Witcher 3: Wild Hunt</li>
                    </ul>
                </div>
                <div class="home-souls home-franchise">
                    <h1 class="home-franchise-txt">Dark Souls Franchise</h1>
                    <ul class="home-games-box">
                        <li>Dark Souls: Remastered</li>
                        <li>Dark Souls 2: Scholars of The First Sin</li>
                        <li>Dark Souls 3</li>
                    </ul>
                </div>
            </section>
        </main>
    </body>
    </html>
`;

var darksoulsContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/script.css">
    </head>
    <body>
        <main class="games-container">
            <article class="game-title">
                <h1>Dark Souls</h1>
                <a href="https://store.steampowered.com/">
                    <img src="./images/steam.svg">
                </a>
            </article>
            <section class="game-box">
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/" target="_blank">
                        <img src="./images/dark-souls.png" alt="Dark Souls">
                    </a>
                </div>
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/" target="_blank">
                        <img src="./images/dark-souls-2.jpg" alt="Dark Souls 2">
                    </a>
                </div>
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/374320/DARK_SOULS_III/" target="_blank">
                        <img src="./images/dark-souls-3.png" alt="Dark Souls 3">
                    </a>
                </div>
            </section>
        </main>
    </body>
    </html>
`;

var thewitcherContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/script.css">
    </head>
    <body>
        <main class="games-container">
            <article class="game-title">
                <h1>The Witcher</h1>
                <a href="https://store.steampowered.com/">
                    <img src="./images/steam.svg">
                </a>
            </article>
            <section class="game-box">
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/20900/The_Witcher_Enhanced_Edition_Directors_Cut/" target="_blank">
                        <img src="./images/the-witcher.png" alt="The Witcher 1">
                    </a>
                </div>
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/20920/The_Witcher_2_Assassins_of_Kings_Enhanced_Edition/" target="_blank">
                        <img src="./images/the-witcher-2.png" alt="The Witcher 2">
                    </a>
                </div>
                <div class="image-box">
                    <a href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/ target="_blank">
                        <img src="./images/the-witcher-3.png" alt="The Witcher 3">
                    </a>
                </div>
            </section>
        </main>
    </body>
    </html>
`;

var value = home;

function render() {
    if (value == home) {
        content.innerHTML = home;
    }
}

function homerender() {
    value = home;

    if (value == home) {
        content.innerHTML = home;
    }
}

function darksoulsrender() {
    value = darksoulsContent;

    if (value == darksoulsContent) {
        content.innerHTML = darksoulsContent;
    }
}

function thewitcherrender() {
    value = thewitcherContent;

    if (value == thewitcherContent) {
        content.innerHTML = thewitcherContent;
    }
}
