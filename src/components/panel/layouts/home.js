import React from 'react'
import Footer from './footer';
import Header from './header';

const Home = () => {
    return (
        <React.Fragment>
          <Header />
          <Footer />
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="jumbotron">
                  {/* <SideBar /> */}
                </div>
              </div>
              <div className="col-md-9">
                <div className="jumbotron">
                  {/* <h1>Content</h1> */}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </React.Fragment>
    )
}

export default Home;