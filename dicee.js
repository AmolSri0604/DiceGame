function rollit() {
    var name1 = document.getElementById("n1").value;
    var name2 = document.getElementById("n2").value;
    // console.log(name1);
    // console.log(name2);
    
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    if (n == 1) {
        document.getElementById("img1").setAttribute("src", "dicepic/dice1.png");
    }
    else if (n == 2) {
        document.getElementById("img1").setAttribute("src", "dicepic/dice2.png");
    }
    else if (n == 3) {
        document.getElementById("img1").setAttribute("src", "dicepic/dice3.png");
    }
    else if (n == 4) {
        document.getElementById("img1").setAttribute("src", "dicepic/dice4.png");
    }
    else if (n == 5) {
        document.getElementById("img1").setAttribute("src", "dicepic/dice5.png");
    }
    else {
        document.getElementById("img1").setAttribute("src", "dicepic/dice6.png");
    }
    var m = Math.random();
    m = m * 6;
    m = Math.floor(m + 1);
    if (m == 1) {
        document.getElementById("img2").setAttribute("src", "dicepic/dice1.png");
    }
    else if (m == 2) {
        document.getElementById("img2").setAttribute("src", "dicepic/dice2.png");
    }
    else if (m == 3) {
        document.getElementById("img2").setAttribute("src", "dicepic/dice3.png");
    }
    else if (m == 4) {
        document.getElementById("img2").setAttribute("src", "dicepic/dice4.png");
    }
    else if (m == 5) {
        document.getElementById("img2").setAttribute("src", "dicepic/dice5.png");
    }
    else {
        document.getElementById("img2").setAttribute("src", "dicepic/dice6.png");
    }
    // if (n>m){
    //     document.querySelector("h1").innerHTML = "🏆Player 1 Wins🏆";
    // }
    // if (n<m){
    //     document.querySelector("h1").innerHTML = "🏆Player 2 Wins🏆";
    // }
    // if (n==m){
    //     document.querySelector("h1").innerHTML = "Draw! Roll it again🎲";
    // }
    // }
    if (n > m) {
        document.querySelector("h1").innerHTML = "🎲 " + name1 + " Wins! 🎲";
    }
    if (n < m) {
        document.querySelector("h1").innerHTML = "🎲 " + name2 + " Wins! 🎲";
    }
    if (n == m) {
        document.querySelector("h1").innerHTML = "🎲 Draw! Roll Again! 🎲";
    }
}