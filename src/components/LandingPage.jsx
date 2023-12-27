import React from 'react'
import  '../css/app.css';
import '../css/header-colors.css';
import '../css/bootstrap-extended.css';
import '../css/bootstrap.min.css';
import '../css/dark-theme.css';
import '../css/icons.css';
import '../css/master.css';
import '../css/pace.min.css';
import '../css/semi-dark.css';

function LandingPage() {
  return (
    <div>
         <div className="page-wrapper">
      <div className="page-content">
        <div className="row row-cols-1 row-cols-lg-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card rounded-4 bg-gradient-rainbow bubble position-relative overflow-hidden">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-0">
                  <div>
                    <h4 className="mb-0 text-white">900</h4>
                    <p className="mb-0 text-white">Total hospitals</p>
                  </div>
                  <div className="fs-1 text-white">
                    <i className="bx bx-home"></i>
                  </div>
                </div>
                <small className="mb-0 text-white">...</small>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card rounded-4 bg-gradient-burning bubble position-relative overflow-hidden">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-0">
                  <div>
                    <h4 className="mb-0 text-white">900</h4>
                    <p className="mb-0 text-white">Active hospitals</p>
                  </div>
                  <div className="fs-1 text-white">
                    <i className="bx bx-group"></i>
                  </div>
                </div>
                <small className="mb-0 text-white">...</small>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card rounded-4 bg-gradient-moonlit bubble position-relative overflow-hidden">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-0">
                  <div>
                    <h4 className="mb-0 text-white">0</h4>
                    <p className="mb-0 text-white">Inactive hospitals</p>
                  </div>
                  <div className="fs-1 text-white">
                    <i className="bx bx-wallet"></i>
                  </div>
                </div>
                <small className="mb-0 text-white">...</small>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card rounded-4 bg-gradient-cosmic bubble position-relative overflow-hidden">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-0">
                  <div>
                    <h4 className="mb-0 text-white">7</h4>
                    <p className="mb-0 text-white">Licence Expired</p>
                  </div>
                  <div className="fs-1 text-white">
                    <i className="bx bx-line-chart-down"></i>
                  </div>
                </div>
                <small className="mb-0 text-white">...</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
