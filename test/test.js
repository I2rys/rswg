//Dependencies
const RSWG = require("../index")

//Main
void async function Main(){
    const result = await RSWG.generate()

    console.log(result)
}()