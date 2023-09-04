


class NailChoice { // declared a class called NailChoice 
    constructor(nails) {
        this.nails = nails;
    }
    describe() {
        return `Selected ${this.nails}`; // describes the selected nails 
    }
}

class SalonMenu { // defined class called salon menu 
    constructor() { // initializes instances w/ empty arrays for color and shape 
        this.nailColor = []; // array for color
        this.nailShape = []; // array for shape 
    }

    start() { // method within the salonmenu class 
        let selection = this.menuOptions(); // calls the menuoptions method for the menu display 
        while (selection !== '0') { // while loop continues as long as the selection is not 0 
            switch (selection) {
                case '1':
                    this.chooseNails(); // if 1 is selected, choosenails method is called 
                    break;
                case '2':
                    this.removeNails(); // if 2 is selected, removeNails is called 
                    break;
                case '3':
                    this.confirmNails(); // if 3 is selected confirm color is called 
                    break;
                default:
                    selection = '0'; // Set selection to 0 for any other input 
            }
            selection = this.menuOptions(); // repeats process 
        }
        alert('Thank you for choosing our salon'); // this is the message that will display when the selections are done being made 
    }

    menuOptions() { // this method creates the menu prompt that displays 
        return prompt(`
        1. Choose Nails
        2. Remove Nails
        3. Confirm Nails
        0. Exit
        `);
    }

    chooseNails() { // this method allows the shape and color to be chosen 
        let chosenColor = prompt(`Select nail color.`);
        this.nailColor.push(new NailChoice(chosenColor));

        let chosenShape = prompt(`Select nail shape.`);
        this.nailShape.push(new NailChoice(chosenShape));
    }

    removeNails() { // allows for the selected option to be removed 
        let index = prompt(`Please select option you want to remove`);
        if (index >= 0 && index < this.nailColor.length && this.nailShape.length) { // checks if index is valid 
            this.nailColor.splice(index, 1); // removes the color that was selected 
            this.nailShape.splice(index, 1); // removes the shape that was selected 
            } 
    }

confirmNails() {
    let confirmMessage = 'Selected Nail Color & Shape:\n'; // this message displays when the selections are confirmed w/ chosen color and shape 
    for (let i = 0; i < this.nailColor.length; i++) {
        confirmMessage += `${i + 1}) Color: ${this.nailColor[i].nails} Shape: ${this.nailShape[i].nails}\n`; 
    }
    alert(confirmMessage); // this will display the message above with the color and shape selected 
}

}
 menu = new SalonMenu(); // this will make the menu available when opened in live server 
menu.start();

