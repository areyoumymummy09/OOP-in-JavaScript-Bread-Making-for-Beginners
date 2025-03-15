class Bread {
    constructor(name, description, placeOfOrigin, difficulty, detailedDescription) {
        this.name = name;
        this.description = description;
        this.placeOfOrigin = placeOfOrigin;
        this.difficulty = difficulty;
        this.detailedDescription = detailedDescription;
    }

    render() {
        const breadItem = document.createElement('div');
        breadItem.classList.add('bread-details');

        const title = document.createElement('h3');
        title.textContent = this.name;

        const description = document.createElement('p');
        description.textContent = `Perfect for: ${this.description}`;

        const origin = document.createElement('p');
        origin.textContent = `Origin: ${this.placeOfOrigin}`;

        const difficulty = document.createElement('p');
        difficulty.textContent = `Difficulty: ${this.difficulty}`;

        const detailedDescription = document.createElement('p');
        detailedDescription.textContent = this.detailedDescription;

        breadItem.appendChild(title);
        breadItem.appendChild(description);
        breadItem.appendChild(origin);
        breadItem.appendChild(difficulty);
        breadItem.appendChild(detailedDescription);

        const detailsSection = document.querySelector('.bread-details');
        if (detailsSection) {
            detailsSection.appendChild(breadItem);
        } else {
            console.warn("No element with class 'bread-details' found in the DOM.");
        }
    }
}

export class BriocheCrown extends Bread {
    constructor(description, mainIngredient, placeOfOrigin, difficulty, detailedDescription) {
        super("Brioche Crown", description, placeOfOrigin, difficulty, detailedDescription);
    }

    bake() {
        this.render();
    }
}

export class Bagel extends Bread {
    constructor(description, mainIngredient, placeOfOrigin, difficulty, detailedDescription) {
        super("Bagel", description, placeOfOrigin, difficulty, detailedDescription);
    }

    bake() {
        this.render();
    }
}

export class Bolillo extends Bread {
    constructor() {
        super(
            "Bolillo",
            "Side Dish or Sandwich Bread",
            "Mexico",
            "Hard",
            "The Bolillo is a traditional Mexican bread roll with a crispy crust and soft, fluffy interior. It's often used as a side for soups and stews."
        );
    }

    bake() {
        this.render();
    }
} 
