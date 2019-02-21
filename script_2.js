let nmb = prompt("De quel nombre veut tu calculer la factorielle ?")
let facto = 1
while (nmb !== 0) {
    facto *= nmb
    nmb -= 1
}
console.log(facto)