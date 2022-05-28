fetch('../eventos.json')
  .then((resp) => {
    return resp.json()
  })
  .then(data => {
    console.log(data);
  })




