class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.petName} is a cute ${this.breed}.`;
    }
}

class Breed {
    constructor(name) {
        this.name = name;
        this.pets = [];
    }
    addPet(pet) {
        if(pet instanceof Pet) {
            this.pets.push(pet);
        } else {
            throw new Error("Only pet intances allowed");
        }
    }

    describe(){
        retun `We care for  ${this.pets.length}  ${this.name}s.`
    }
}

class Menu {
    constructor() {
        this.breeds = [];
        this.selectedBreed = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while(selection != 0) {
            switch (selection) {
            case '1': 
                this.createBreed();
                break;
            case '2':
                this.viewBreed();
                break;
            case '3':
                this.deleteBreed();
            case '4':
                this.displayBreeds();
                break;
            default:
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new breed
        2) view breed
        3) delete breed
        4) display all breeds
        `);
    }

    showBreedMenuOptions(breedInfo) {
        return prompt(`
        0) back
        1) create pet
        2) delete pet
        ------------------
        ${breedInfo}
        `);
    }

    deleteBreed() {
        let index = prompt("enter the index of the breed to be deleted");
        if(index > -1 && index < this.breeds.length) {
            this.breeds.splice(index, 1);
        }
    }


    displayBreeds() {
        let breedString = '';
        for (let i = 0; i < this.breeds.length; i++) {
            breedString += i + ') ' + this.breeds[i].name + '\n';
        }
        alert(breedString);
    } 

    createBreed(){
        let name = prompt('Enter name for new breed:');
        this.breeds.push(new Breed(name));
    }

    viewBreed() {
        let index = prompt('Enter the index of the breed you wish to view:');
        if (index > -1 && index < this.breeds.length) {
            this.selectedBreed = this.breeds[index];
            let description = 'Breed Name: ' + this.selectedBreed.name + '\n';
        
            for(let i = 0; i < this.selectedBreed.pets.length; i++) {
                description += i + ') ' + this.selectedBreed.pets[i].name 
                + ' - ' + this.selectedBreed.pets[i].age + '\n';
            }

            let selection = this.showBreedMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPet();
                    break;
                case '2':
                    this.deletePet();
            }
        }
    }

    createPet() {
        let name = prompt('Enter name for new pet:');
        let age = prompt('Enter pet age');
        this.selectedBreed.pets.push(new Pet(name, age));
    }
    

    deletePet(){
        let index = prompt('Enter the index of the pet to delete')
        if(index > -1 && index < this.selectedBreed.pets.length) {
            this.selectedBreed.pets.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

console.log(Pet(violet,2));