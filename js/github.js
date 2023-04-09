  fetch('https://raw.githubusercontent.com/Jose-CabreraO/Jose-CabreraO/master/README.md')
    .then(response => response.text())
    .then(text => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      document.querySelector('#readme').innerHTML = html;
    })
    .catch(error => console.error(error));
