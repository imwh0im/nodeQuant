import moment from "moment";


function nonce() {
  const now = new Date().getTime() / 1000
  const sec = parseInt(now.toString(), 10)
  const usec = (Math.round((now - sec) * 1000) / 1000).toString().substr(2, 3)

  return Number(String(sec) + String(usec))
}


setInterval( () => {
  console.log(moment(nonce()).format("YYYY-MM-DD HH:mm:ss"));
}, 10000);