const textField = document.querySelector(".text__field")
const countButton = document.querySelector(".count__button")


//ORDER OF N AS WORST CASE SCENARIO

function countVowel(){
    let textFieldValues = textField.value.toLowerCase()
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    let obj = {}
    for(let i=0; i<vowels.length; i++){
        obj[i] = vowels[i]
    }

    for(let value of textFieldValues){
        if(Object.values(obj).includes(value)){
            count += 1
        }
    }
    alert(`There are ${count} vowels in your sentence.`)
}

countButton.addEventListener("click", countVowel)



//ORDER OF N*2 AS WORST CASE SCENARIO


// function countVowel(){
//     let textFieldValues = textField.value.toLowerCase()
//     let count = 0
//     let vowels = ["a", "e", "i", "o", "u"]
//     vowels.forEach((vowel)=>{
//         for(let i=0; i<textFieldValues.length; i++){
//             if(textFieldValues[i] === vowel){
//                 count += 1
//             } 
//         }
//     })
//     alert(`There are ${count} vowels.`)
// }