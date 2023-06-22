/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
  this.test = "test";
}
Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};
Pokemon.prototype.isDefeated = function () {
  if (this.health >= 1) {
    return false;
  }
  return true;
};
function simulateBattle(pokeOne, pokeTwo, firstAttacker) {
  let first = firstAttacker === pokeOne.name ? pokeOne : pokeTwo,
    second = first === pokeOne ? pokeTwo : pokeOne,
    fight = true;

  while (first.isDefeated() === second.isDefeated()) {
    if (fight) {
      second.health -= first.biteAttack();
      fight = false;
    } else {
      first.health -= second.biteAttack();
      fight = true;
    }
  }

  return (first.isDefeated() ? second.name : first.name) + " Wins!";
}
