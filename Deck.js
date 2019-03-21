

    var shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    
    };

    var Deck =  ["1","2","3","4","5", "6", "7", "8", "9", "10" , "11", "12", "13", "14" , "15", "16" , "17" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39" ,"40", "41", "42", "43", "44", "45", "46", "47", "48", "49" ,"50", "51", "52"]
    
    var numCard = ["1","2","3","4","5", "6", "7", "8", "9", "10", "11", "12", "13"]
    var currentCard = 0;

    var score = 0;
    var cardValue = 0;


    var card;
    function drawCard()
{
    if (score < 22){
        shuffle(Deck);
        shuffle(Deck);
        shuffle(Deck);
        card = Deck.shift();
        cardValue = parseInt(card, 10);
        document.getElementById("map_img" + numCard[currentCard]).src = "card" + card + ".jpg";
        document.getElementById("map_img" + numCard[currentCard]).width = "50";
        document.getElementById("map_img" +numCard[currentCard]).style.display = "";
        currentCard++;

            if(cardValue < 5){
                score = score + 2;
            }
            else if(cardValue > 4 && cardValue < 9){
                score = score + 3;
            }
            else if(cardValue > 4 && cardValue < 9){
                score = score + 3;
            }
            else if(cardValue > 8 && cardValue < 13){
                score = score + 4;
            }
            else if(cardValue > 12 && cardValue < 17){
                score = score + 5;
            }
            else if(cardValue > 16 && cardValue < 21){
                score = score + 6;
            }
            else if(cardValue > 20 && cardValue < 25){
                score = score + 7;
            }
            else if(cardValue > 24 && cardValue < 29){
                score = score + 8;
            }
            else if(cardValue > 28 && cardValue < 33){
                score = score + 9;
            }
            else if(cardValue > 32 && cardValue < 49){
                score = score + 10;
            }
            else if(cardValue > 48 && cardValue < 53){
                if (score>10){
                    score = score + 1;
                }
                else{
                    score = score + 11;
                }
                
            }
        if (score > 21){
            document.getElementById("heading2").innerHTML = "BUST!! YOU LOSE"
        }
    }
}
    function stand(){
        if (score < 21){
            document.getElementById("heading2").innerHTML = "THE DEALER HAD 21 - YOU LOSE"
        }
        else if (score == 21){
            document.getElementById("heading2").innerHTML = "THE DEALER HAD 21 - YOU TIE"
        }
    }

