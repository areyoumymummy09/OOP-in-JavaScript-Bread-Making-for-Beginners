import { BriocheCrown, Bagel, Bolillo } from './bread.js';
import { CapybaraSoundButton } from './sound.js';
import { animate } from './animate.js';



const brioche = new BriocheCrown(
    "Breakfast, dessert, snack and main course as a burger bun",
    "Flour, eggs, butter, milk, water, cream",
    "France",
    "Easy",
    "The Brioche Crown is a classic French pastry known for its rich, buttery flavor and soft, fluffy texture. Originating from France, it's often enjoyed as a breakfast treat or dessert, either plain or filled with sweet or savory ingredients."
);

const bagel = new Bagel(
    "Enjoy bagels for any meal of the day, whether for breakfast, lunch, or even as a snack, with a variety of savory or sweet toppings.",
    "Warm Water, Yeast, Bread Flour, Brown Sugar, Salt",
    "Germany, Poland",
    "Medium",
    "The Bagel is a traditional Jewish bread known for its dense, chewy texture and distinctive ring shape. Originating from Poland, it's typically boiled before baking, giving it a crisp exterior and soft interior. Bagels are often enjoyed with a variety of toppings, such as cream cheese, smoked salmon, or seeds."
);

brioche.bake();
bagel.bake();


const bolilloBread = new Bolillo();
bolilloBread.bake();

const soundButton = new CapybaraSoundButton(
    'Hear Capybara',
    './images/volume-high.png',
    './audio/Capybara_song.mp3',
    '.capybara-sound-container'
);

soundButton.render();
animate();