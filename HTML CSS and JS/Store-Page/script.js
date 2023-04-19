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
                        <h1 class="home-franchise-txt">The Witcher</h1>
                        <ul class="home-games-box">
                            <li>The Witcher: Enhanced Edition</li>
                            <li>The Witcher 2: Assassins of kings</li>
                            <li>The Witcher 3: Wild Hunt</li>
                        </ul>
                    </div>
                    <div class="home-souls home-franchise">
                        <h1 class="home-franchise-txt">Dark Souls</h1>
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
                <div class="image-box" onclick="buyDarkSouls()">
                    <img src="./images/dark-souls.png" alt="Dark Souls">
                </div>
                <div class="image-box" onclick="buyDarkSouls2()">
                    <img src="./images/dark-souls-2.jpg" alt="Dark Souls 2">
                </div>
                <div class="image-box" onclick="buyDarkSouls3()">
                    <img src="./images/dark-souls-3.png" alt="Dark Souls 3">
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
                <div class="image-box" onclick="buyWitcher()">
                    <img src="./images/the-witcher.png" alt="The Witcher 1">
                </div>
                <div class="image-box" onclick="buyWitcher2()">
                    <img src="./images/the-witcher-2.png" alt="The Witcher 2">
                </div>
                <div class="image-box" onclick="buyWitcher3()">
                    <img src="./images/the-witcher-3.png" alt="The Witcher 3">
                </div>
            </section>
        </main>
    </body>
    </html>
`;

var buydsContent = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/dark-souls.png" alt="Dark Souls">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">Dark Souls: Remastered</h1>
                        <p class="game-text-details">
                            Remaster of first Dark Souls after Demon's Souls! Enjoy the (g)old bosses with new graphics, 60 frames, new hud settings and a lot of ehancements!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
                </section>
            </main>
        </body>
    </html>
`;

var buydsContent2 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/dark-souls-2.jpg" alt="Dark Souls 2">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">Dark Souls 2: Scholars of the First Sin</h1>
                        <p class="game-text-details">
                            Sequel of famous Dark Souls 1! Your adventure on the south but the same difficult, more bosses, gameplay features, areas and optional content!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
                </section>
            </main>
        </body>
    </html>
`;

var buydsContent3 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/dark-souls-3.png" alt="Dark Souls 3">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">Dark Souls 3</h1>
                        <p class="game-text-details">
                            Sequel of not too famous Dark Souls 2! Your adventure back to the north, but on another time, another kingdom, new bosses, areas and back to the dark atmosphere!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
                </section>
            </main>
        </body>
    </html>
`;

var buytw = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/the-witcher.png" alt="The Witcher 1">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">The Witcher</h1>
                        <p class="game-text-details">
                            Released near to 2004, The witcher is a story rich category. There was Geralt of Rivia, a witcher, your player, your magnificent swordsman!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
                </section>
            </main>
        </body>
    </html>
`;

var buytw2 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/the-witcher-2.png" alt="The Witcher 2">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">The Witcher 2</h1>
                        <p class="game-text-details">
                            After geralt story on The Witcher 1, Geralt of Rivia come back to your controller on a new adventure with elves, new witcher and a new story!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
                </section>
            </main>
        </body>
    </html>
`;

var buytw3 = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style/script.css">
        </head>
        <body>
            <main class="details-container">
                <section class="game-box-details">
                    <div class="image-box-details">
                        <img src="./images/the-witcher-3.png" alt="The Witcher 3">
                    </div>
                </section>
                <section class="game-details">
                    <article class="details-article">
                        <h1 class="game-title-details">The Witcher 3</h1>
                        <p class="game-text-details">
                            Released on 2015, win the GOTY and the heart of many player around the world! Great sequel and a maginificent Action RPG!
                        </p>
                        <span class="price">
                            $ 30,00
                        </span>
                    </article>
                    <button onclick="buybtn()">
                        Buy
                    </button>
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

function buyDarkSouls() {
    value = buydsContent;

    if (value == buydsContent) {
        content.innerHTML = buydsContent;
    }
}

function buyDarkSouls2() {
    value = buyDarkSouls2;

    if (value == buyDarkSouls2) {
        content.innerHTML = buydsContent2;
    }
}

function buyDarkSouls3() {
    value = buyDarkSouls3;

    if (value == buyDarkSouls3) {
        content.innerHTML = buydsContent3;
    }
}

function buyWitcher() {
    value = buytw;

    if (value == buytw) {
        content.innerHTML = buytw;
    }
}

function buyWitcher2() {
    value = buytw2;

    if (value == buytw2) {
        content.innerHTML = buytw2;
    }
}

function buyWitcher3() {
    value = buytw3;

    if (value == buytw3) {
        content.innerHTML = buytw3;
    }
}

function buybtn() {
    alert("You buy it!");
}
