class Character {
    constructor(name) {
      this.name = name
    }
  
    attack(target) {
      this.name = target
      console.log(`${target.name} and takes damage`)
    }
  
    heal() {
      console.log(`${this.name} stands still.`)
    }
  
    changeName(newName) {
      this.name = newName
      console.log(`New Player Name ${this.name}`)
    }
  }
  
  const player1 = new Character('Player 1')
  const player2 = new Character('Player 2')
  
  console.log(`Name of player 1 : ${player1.name} || Name of player 2 : ${player2.name}`)
  player1.attack(player2)
  player2.heal(player2)
  player1.changeName('Arthur')
  