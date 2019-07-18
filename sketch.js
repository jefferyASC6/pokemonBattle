let pokemon1 = {
    name: "Squirtle",
    health: 200,
    attack1: "Bubble Beam",
    attack2: "Bite",
    attack3: "Scratch",
    attack4: "Water Gun"
}

let pokemon2 = {
    name: "Bulbasaur",
    health: 200,
    attack1: "Razor Leaf",
    attack2: "Tackle",
    attack3: "Vine Whip",
    attack4: "Pound"
}

let aX1 = 40;
let aY1 = 550;

let aX2 = 600;
let aY2 = 350;

let pokemon1Attacks = [pokemon1.attack1, pokemon1.attack2, pokemon1.attack3, pokemon1.attack4]
let pokemon2Attacks = [pokemon2.attack1, pokemon2.attack2, pokemon2.attack3, pokemon2.attack4]
let attackButtons1 = [];
let attackButtons2 = [];

let gif_createImg1;
let gif_createImg2;
let pokemonImg;

let winner = null;

function preload(){
    gif_createImg1 = createImg("squirtle.gif");

    gif_createImg2 = createImg("bulbasaur.gif");

    pokemonImg = createImg("pokemon-logo.png")
}

function setup(){
    createCanvas(1000,600);
    for (let attack of pokemon1Attacks){
        attack = createButton(attack);
        attackButtons1.push(attack)
        attack.position(aX1, aY1);
        aX1 += 100;
    }      
    for (let attack of pokemon2Attacks){
        attack = createButton(attack)
        attackButtons2.push(attack)
        attack.position(aX2, aY2);
        aX2 += 100;
    }
}

function displayHealth(){
    textSize(30);
    fill("green")
    text(`Health: ${pokemon1.health}`, 10, 233);
    text(`Health: ${pokemon2.health}`, 560, 33)
}

function damage1(){
    if (pokemon1.health > 0){
        pokemon1.health -= 20
    }
}

function damage2(){
    if (pokemon2.health > 0){
        pokemon2.health -= 20
    }
}

// function displayTitle(){
//     fill("black")
//     textSize(50);
//     textFont("Helvetica")
//     text("Pokémon Battle!", 35, 115);
// }

let player = "player1";

function switchTurn(){
    if (player === "player1"){
        player = "player2"
    } else if (player === "player2"){
        player = "player1"
    }
}

function draw(){
    background(180, 250, 175);

    if (player === "player1"){
        for (let button of attackButtons1){
            button.mousePressed(damage2);
        }
    } else if(player === "player2"){
        for (let button of attackButtons2){
            button.mousePressed(damage1);
        }
    }

    // displayTitle()

    // Pokemon1
    fill(255, 252, 196);
    rect(0, 200, 450, 400);
    // Pokemon2
    rect(550, 0, 450, 400);

    fill(255, 255, 255);
    
    // Health Bar 1
    rect(0, 200, 450, 45);
    // Health Bar 2
    rect(550, 0, 450, 45);

    // Attack Bar 1
    fill(240, 237, 242);
    rect(0, 500, 450, 100);

    // Attack Bar 2
    fill(240, 237, 242)
    rect(550, 300, 450, 100);
    
    // Squirtle Animation - Position and Size
    gif_createImg1.position(125, 280);
    gif_createImg1.size(200, 200);

    // Bulbasaur Animation - Position and Size
    gif_createImg2.position(675, 72.5);
    gif_createImg2.size(200, 200);

    // Pokemon Logo
    pokemonImg.position(30, 30);
    pokemonImg.size(400, 147.2);

    displayHealth()
    
}
