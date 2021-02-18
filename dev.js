// Exercício Vetores - Arrays

const employee1 = {
  name: "Carlos",
  age: 32,
  tecnology: [
    { name: 'JavaScript', specialty: 'Web/Mobile' },
    { name: 'C++', specialty: 'Desktop' },
    { name: 'Pythom', specialty: 'Data Science' },
  ]
}

console.log(`O usuários ${employee1.name} tem ${employee1.age} anos e usa a tecnologia ${employee1.tecnology[1].name} com especialidade em ${employee1.tecnology[1].specialty}.`)
