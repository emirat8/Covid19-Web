class GlobalReports extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  set reports(reports) {
    this._reports = reports;
    this.renderSuccess();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>

      <div class="container">
        <div class="alert alert-danger" role="alert">
          <strong>${message}</strong>
        </div>
      </div>
    `;
  }

  renderSuccess() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        
        .card {
          width: 18.5rem;
          margin: 1rem;
          
        }
      </style>

      <div class="jumbotron">
        <h1 class="display-4">Coronavirus Global Reports</h1>
        <hr class="my-4">
        <p>Here is infected, recovered, and death patients report for coronavirus (COVID-19) that has been recorded from the whole world (Up to Date).</p>
    
        <div class="row justify-content-center">
          <div class="col-xs-4">
            <div class="card bg-warning text-white">
              <div class="card-body">
                <h2>Confirmed</h2>
                <p>${this._reports.confirmed.value}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-success text-white">
              <div class="card-body">
                <h2>Recovered</h2>
                <p>${this._reports.recovered.value}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-danger text-white">
              <div class="card-body">
                <h2>Deaths</h2>
                <p>${this._reports.deaths.value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("global-reports-app", GlobalReports);
