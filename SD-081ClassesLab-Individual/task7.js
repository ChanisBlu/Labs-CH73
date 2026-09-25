export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
    this.party = [];
    this.inventory = {};
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level++;
  }

  gainExperience(points) {
    this.experience += points;
    const experienceNeeded = 100;
    if (this.experience >= experienceNeeded) {
      this.experience -= experienceNeeded;
      this.levelUp();
    }
  }

  addToParty(player) {
    this.party.push(player);
  }

  removeFromParty(player) {
    this.party = this.party.filter(member => member !== player);
  }

  addItem(itemName, quantity = 1) {
    this.inventory[itemName] = (this.inventory[itemName] || 0) + quantity;
  }

  removeItem(itemName, quantity = 1) {
    if (!this.inventory[itemName]) return;
    this.inventory[itemName] -= quantity;
    if (this.inventory[itemName] <= 0) delete this.inventory[itemName];
  }
}