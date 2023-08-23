// Constant Variables
const conPrice = 125.00
const mat1Price = 200
const mat1Coverage = 100
const mat2Price = 7
const mat2Converage = 10

const ieFtSq = 2000

//Multiply the two inputs together to recieve totalFtCu
//Keep variables for input (parse.float)


// CALCULATING YARDS CUBED
function totalYardsCu (totalFtCu) {
    totalFtCu += 81;
    let yardsCu =  (totalFtCu/27.00).toFixed(2);
    return yardsCu;
}

// CALCULATING CONCRETE PRICE
function conCalc (totalFtCu, concretePrice) {
    return (totalFtCu * concretePrice).toFixed(2);
}

//EXAMPLE MATERIAL PRICE
function matCalc (totalFtSq, matPrice, matCoverage) {
    let matAmount = (totalFtSq/matCoverage).toFixed(0)
    console.log(totalFtSq/matCoverage)
    return (matPrice * matAmount).toFixed(2);
}

//Example 1 

let ie1 = totalYardsCu(ieFtSq)
let ie2 = conCalc(ie1, conPrice)
let ie3 = matCalc(ieFtSq, mat1Price, 100)



console.log(`This is ie1: ${ie1} \n This is ie2: ${ie2} \n This is ie3: ${ie3}`)