function obtenerCotizaciones() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,dogecoin,binancecoin&vs_currencies=usd';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const bitcoin = data['bitcoin']['usd'];
        const ethereum = data['ethereum']['usd'];
        const cardano = data['cardano']['usd'];
        const dogecoin = data['dogecoin']['usd'];
        const binancecoin = data['binancecoin']['usd'];
  
        const bitcoinElemento = document.getElementById('bitcoin');
        const ethereumElemento = document.getElementById('ethereum');
        const cardanoElemento = document.getElementById('cardano');
        const dogecoinElemento = document.getElementById('dogecoin');
        const binancecoinElemento = document.getElementById('binancecoin');
  
        bitcoinElemento.innerHTML = bitcoin;
        ethereumElemento.innerHTML = ethereum;
        cardanoElemento.innerHTML = cardano;
        dogecoinElemento.innerHTML = dogecoin;
        binancecoinElemento.innerHTML = binancecoin;
      })
      .catch(error => {
        console.error('Error al obtener cotizaciones', error);
      });
  }
  
  obtenerCotizaciones();
  
  