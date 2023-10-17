// Constant Variables
// const conPrice = 125.00
// const mat1Price = 200
// const mat1Coverage = 100
// const mat2Price = 7
// const mat2Coverage = 10

// const ieFtSq = 2000

//Multiply the two inputs together to recieve totalFtCu
//Keep variables for input (parse.float)

const math = {
    // CALCULATING YARDS CUBED
    totalYardsCu: function (totalFtCu) {
        // totalFtCu += 81;
        //add 3 because pumps use 1 cubic yard to start
            let yardsCu = ((totalFtCu / 27.00) + 3).toFixed(2);
            return parseInt(yardsCu);
    },

    // CALCULATING CONCRETE PRICE
    conCalc: async function (totalFtCu, concretePrice) {
        try {
            return parseInt((totalFtCu * concretePrice).toFixed(2));
        } catch (err) {
            console.error(err);
        }
    },

    //EXAMPLE MATERIAL PRICE
    matCalc: async function (totalFtSq, matPrice, matCoverage) {
        try {   //miles traveled over 20 //1 mile
            let matAmount = (totalFtSq / matCoverage).toFixed(0)
                            //price
            return parseInt((matPrice * matAmount).toFixed(2));
        } catch (err) {
            console.error(err);
        }
   }    
}
export default math;

//Example 1 

// let ie1 = totalYardsCu(ieFtSq)
// let ie2 = conCalc(ie1, conPrice)
// let ie3 = matCalc(ieFtSq, mat1Price, 100)



// console.log(`This is ie1: ${ie1} \n This is ie2: ${ie2} \n This is ie3: ${ie3}`)