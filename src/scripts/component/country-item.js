class CountryItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container {
          width: 90%;
          margin-bottom: 5rem;
        }
        
        .card-header {
          font-weight: 600;
          font-size: 2rem;
        }

        .list-group-item {
          width: 18rem;
          margin: 1rem;
          padding: 1rem;
          letter-spacing: 1px;
        }
      </style>

      <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header text-white bg-dark">${this._country.countryRegion}</div>
              <div class="card-body">
                <ul class="list-group list-group-horizontal text-center text-white justify-content-center">
                  <li class="list-group-item bg-warning"><h2>Confirmed</h2><p>${this._country.confirmed}</p></li>
                  <li class="list-group-item bg-success"><h2>Recovered</h2><p>${this._country.recovered}</p></li>
                  <li class="list-group-item bg-danger"><h2>Deaths</h2><p>${this._country.deaths}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `;
  }
}

customElements.define("country-item", CountryItem);
