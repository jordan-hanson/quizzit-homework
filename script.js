


let users = [{ name: "Jordan", score: 1000 }, { name: "Jordan", score: 500 }, { name: "Jordan", score: 3000 }, { name: "Jordan", score: 2000 }, { name: "Jordan", score: 500 }]

console.log(users, 'before sort')

let highestScoreToLowest = users.sort((a, b) => b.score - a.score)

console.log(highestScoreToLowest, 'after sort')
