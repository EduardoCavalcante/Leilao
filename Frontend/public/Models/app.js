
//import login from '../Models.Login.js';

class App {
  init () {
    this.render ()
  }
  render () {
    document.querySelector('#app').innerHTML = `<h1>Hello, World!</h1>`;
  }
}

let app = new App();
app.init();