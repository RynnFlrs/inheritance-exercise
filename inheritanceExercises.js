const character = {
    name: this.name,
  
    attack: function(target) {
      console.log(`${target.name} takes damage from ${this.name}`)
    },
  
    heal: function(target) {
      console.log(`${target.name} is healed.`)
    },
  
    changeName: function(newName) {
      console.log(`Successfuly changed name of ${this.name} to ${newName}`)
      this.name = newName
    }
  }
  
  const player1 = Object.create(character)
  const player2 = Object.create(character)
  
  player1.name = 'Aston'
  player2.name = 'Martin'
  console.log(`Name of player 1 : ${player1.name} || Name of player 2 : ${player2.name}`)
  player1.attack(player2)
  player2.heal(player2)
  player1.changeName('Arthur')
  console.log(`Name of player 1: ${player1.name}`)
  