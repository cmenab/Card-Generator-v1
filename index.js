window.onload = function () {
    // Genera numero random para utilizar como indice
    let Number = Math.floor(Math.random() * 13);
    let SymbolNumber = Math.floor(Math.random() * 4);

    // Arreglos que contienen los valores que se muestran en el medio de la carta
    let cardValue = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
    // Simbolos de la carta, se va a concatenar para crear una clase
    let cardSymbol = ["heart","club","spade","diamond"];

    // Concatena los valores del array con indice random junto a card- formando el nombre de la clase css
    document.getElementById("symbol-top").className = "card-"+cardSymbol[SymbolNumber];
    document.getElementById("symbol-bottom").className = "card-"+cardSymbol[SymbolNumber];
    document.getElementById("number").innerHTML = cardValue[Number];
};