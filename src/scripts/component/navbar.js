class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        
        .navbar {
          padding: 1.5rem 2rem;
        }

        .navbar-brand {
          font-size: 2.4rem;
        }
      </style>
  
        <nav class="navbar navbar-expand-lg justify-content-center navbar-dark bg-dark">
          <a class="navbar-brand mr-auto" href="/">COVID-19</a>
        </nav>
    `;
  }
}

customElements.define("navbar-app", Navbar);
