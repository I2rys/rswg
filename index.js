//Dependencies
const Axios = require("axios")

//Main
async function generate(){
    const response = await Axios({
        method: "GET",
        url: "https://api.waifu.im/sfw/waifu/"
    })

    return response.data.images[0]
}

//Exporter
module.exports = {
    generate
}