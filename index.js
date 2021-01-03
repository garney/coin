const axios = require('axios');

// const rand = Math.round(Math.random()*1000);
// const Http = new XMLHttpRequest();
const url='https://www.coinspot.com.au/pubapi/latest';
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }
async function tester() {
	return Math.round(Math.random()*1000);
}

function getCoins() {
  axios.get(url).then((res) => {
    const ret = {
      text: `ltc:${Math.floor(res.data.prices.ltc.bid)}`;
    }
    console.log(JSON.stringify(ret));
    // console.log(`I LOVE YOU ANTHEA!!!`);
  })

}

getCoins();
