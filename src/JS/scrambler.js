/**
 * Class representing a text scramble effect.
 */
class TextScramble {
  /**
   * Create a TextScramble instance.
   * @param {HTMLElement} el - The HTML element to apply the scramble effect to.
   */
  constructor(el) {
    this.el = el; // The DOM element where the effect is applied
    this.chars = '!<>-_\\/[]{}—=+*^?#________'; // Characters used in the scramble effect
    this.update = this.update.bind(this); // Bind the update method to the instance
  }

  /**
   * Set the new text for the element and start the scramble effect.
   * @param {string} newText - The new text to display after the scramble.
   * @returns {Promise} A promise that resolves when the text has finished changing.
   */
  setText(newText) {
    const oldText = this.el.innerText; // The current text in the element
    // Determine the longer length between old and new text
    const length = Math.max(oldText.length, newText.length);
    // Promise to be resolved when the effect is complete
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = []; // Queue of characters transitions

    for (let i = 0; i < length; i += 1) {
      const from = oldText[i] || ''; // Character from the old text or empty if none
      const to = newText[i] || ''; // Character from the new text or empty if none
      const start = Math.floor(Math.random() * 40); // Random start frame for the effect
      const end = start + Math.floor(Math.random() * 70); // Random end frame for the effect
      this.queue.push({
        from, to, start, end,
      }); // Add transition to the queue
    }

    cancelAnimationFrame(this.frameRequest); // Cancel any previous animation frame request
    this.frame = 0; // Reset frame count
    this.update(); // Start the update loop
    return promise; // Return the promise to allow chaining
  }

  update() {
    let output = ''; // String to build the current output
    let complete = 0; // Counter for completed transitions

    for (let i = 0, n = this.queue.length; i < n; i += 1) {
      let {
        from, to, start, end, char,
      } = this.queue[i];

      if (this.frame >= end) {
        complete += 1; // Increment complete counter if transition is done
        output += to; // Use the target character
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar(); // Select a random scramble character
          this.queue[i].char = char; // Update the character in the queue
        }
        output += char;
      } else {
        output += from; // Use the original character
      }
    }

    this.el.innerHTML = output; // Update the element's HTML

    if (complete === this.queue.length) {
      this.resolve(); // Resolve the promise if all transitions are complete
    } else {
      this.frameRequest = requestAnimationFrame(this.update); // Request next animation frame
      this.frame += 1; // Increment frame count
    }
  }

  /**
   * Select a random character from the scramble character set.
   * @returns {string} A random character.
   */
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Define the texts and navigation items to scramble and their respective containers.
const textsToScramble = [
  { text: 'Yoann Rouquié', container: document.getElementById('myName') },
  { text: 'Développeur Web', container: document.getElementById('jobTitle') },
  { text: 'Je créé et ajuste des fonctionnalités pour les applications web', container: document.getElementById('jobSubtitle') },
];

const navToScramble = [
  { text: 'A propos', container: document.getElementById('nav-about') },
  { text: 'Projets', container: document.getElementById('nav-projects') },
  { text: 'Parcours', container: document.getElementById('nav-career') },
];

let navElementCount = 0; // Counter to keep track of the current navigation element being scrambled

/**
 * Initiates scrambling effect for navigation items in a sequential manner.
 * @param {Object} row - The text and container to apply the scrambling effect to.
 */
const navScrambling = (row) => {
  const scrambleEffect = new TextScramble(row.container);
  scrambleEffect.setText(row.text).then(() => {
    navElementCount += 1; // Increment counter after each scramble effect is completed
    // Check if there are more navigation items to scramble
    if (navElementCount < navToScramble.length) {
      // Schedule the next scramble with a slight delay for a sequential effect
      setTimeout(() => navScrambling(navToScramble[navElementCount]), 150);
    }
  });
};

/**
 * Applies the scramble effect to each element in the provided array.
 * @param {Array} array - Array of objects with text and container for the scramble effect.
 */
const scramblingProcess = (array) => {
  array.forEach((element, index) => {
    const arrayLength = array.length;
    const scrambleEffect = new TextScramble(element.container);
    scrambleEffect.setText(element.text).then(() => {
      setTimeout(() => {
        // Once the last element has been scrambled, initiate scrambling for navigation items
        if (index === arrayLength - 1) {
          navScrambling(navToScramble[navElementCount]);
        }
      }, 250);
    });
  });
};

// Start the scrambling process for the main texts
scramblingProcess(textsToScramble);
