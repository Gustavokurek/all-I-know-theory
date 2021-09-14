// é praticamente um laço de repetição em forma de função

function recursiva(max){
console.log(max)
if (max>=200) return;
max++;
recursiva(max)
}

recursiva(0)