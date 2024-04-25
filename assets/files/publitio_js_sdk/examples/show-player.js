import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/players/show/<player ID>', 'GET')
  .then(data => { console.log(data) })
  .catch(error => { console.log(error) })
