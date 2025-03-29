const button = document.getElementById("Button")
button.addEventListener("click", function () {
getName()
})

let num = 2
let num2 = 9
let num3 = num+num2
console.log(num3)


let name = "Paarth"
console.log("Your name is "+name)

let list = [0,1,2,3,4,5,6,7,8,9]
console.log(list[6])

let win = false
console.log(win)
if (list[3] == 0){
  console.log(name)
} else if (list[3] == 3) {
  console.log(num3+" "+name)
}
let names = ["James", "Cody", "Jim", "Joe", "Greg", "Paarth", "Alfred", "Alan", "Kai", "Preston"]
console.log(names[0].substring(0,3))
for(let i = 0; i < names.length; i++) {
  console.log(names[i].substring(0,2))
}
function getName() {
  name = document.getElementById("input").value
  names.push(name)
  document.getElementById("list").innerHTML = names
}
