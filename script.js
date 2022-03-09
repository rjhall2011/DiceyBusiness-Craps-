console.log('%cStart%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;');

$(document).ready(() => {

    const diceOnScreen = [];
    let diceCreated = 0;
    let diceTotal = 0;

    const getRandomValue = (maximum, minimum) => {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);
    }


    const addDice = () => {
        let newRandomValue = getRandomValue(7, 1);
        let newDieDiv = new Die(newRandomValue);
        console.log(newDieDiv)
        diceOnScreen.push(newDieDiv);
        diceCreated += 1;
    }


    const rollDice = () => {
        for (let i = 0; i < diceOnScreen.length; i ++) {
            diceOnScreen [i].roll();
        }
    }


    const addRolls = () => {
        for (let i = 0; i < diceOnScreen.length; i ++) {
            diceTotal += diceOnScreen[i].value;
        }
        alert(`Your total is ${diceTotal}!`)
        resetDiceTotal()
    }


    const resetDiceTotal = () => {
        diceTotal = 0;
    }

    const resetDiceOnScreen = () => {
        location.reload();
    }

    $(`#generateDieButton`).click(addDice);
    $(`#rollDiceButton`).click(rollDice);
    $(`#getSumButton`).click(addRolls);
    $(`#startOverButton`).click(resetDiceOnScreen);


    class Die {
        constructor(value) {
            this.value = value;
            this.id = diceCreated
            this.div = $(`<div></div>`);
            this.div.attr(`id`, this.id);
            this.div.attr(`class`, `die`)
            this.div.append(this.dieFace());
            $(`#diceContainerDiv`).append(this.div);


            this.div.click(() => {
                this.roll();
            })



            this.div.dblclick(() => {

                $(`#${this.id}`).remove();
                let index = diceOnScreen.findIndex(item => item.id === this.id);
                diceOnScreen.splice(index, 1);
            })
        }



        roll() {
            this.newValue = getRandomValue(7, 1);
            this.value = this.newValue;
            this.div.empty().append(this.dieFace());
        }


        dieFace() {
            if (this.value === 1) {
                return $(`<img src='dice1.png'/>`);
            } else if (this.value === 2) {
                return $(`<img src='dice2.png' />`);
            } else if (this.value === 3) {
                return $(`<img src='dice 3.png' />`);
            } else if (this.value === 4) {
                return $(`<img src='dice4.png'/>`);
            } else if (this.value === 5) {
                return $(`<img src='dice5.png' />`);
            } else if(this.value === 6) {
                return $(`<img src='dice6.png' />`);
            }
        
        }   
    }         
})
