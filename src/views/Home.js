import React, { useEffect, useState } from 'react';


import './Home.css';

const Home = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bar = document.getElementById('bar');

    const setProgress = (percent) => {
      const p = 180 - (percent / 100) * 180;
      bar.style.transform = `rotate(-${p}deg)`;
    };

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 15;
      setProgress(currentProgress);

      if (currentProgress > 80) {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div id="exTab1" class="container w-100 p-0 m-0">
        <ul class="nav nav-pills w-100 ">
          <div className="tab d-flex">
            <li class="active tabs">
              <a href="#1a" data-toggle="tab ">Factory Floor </a>
            </li>
            <li className='tabs'><a href="#2a" data-toggle="tab">Worker Status</a>
            </li>
            <li className='tabs'><a href="#3a" data-toggle="tab"> Operation Status</a>
            </li>
            <li className='tabs'><a href="#4a" data-toggle="tab"> Machine Status</a>
            </li></div>
        </ul>

        <div class="tab-content bg-white w-100 clearfix">

          <div class="tab-pane d-grid active " id="1a">

            <div className="row mt-2 mb-2">
              <div className="col-md-3">
                <div className="">
                  <h5 className='pro-title'>Productivity</h5>
                  <div className="wrapper1 ">
                    <div className="circle-out">
                      <div id="bar" className=" circle-1"></div>
                      <span className="text">75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="">
                  <h5 className='pro-title'>Availbility</h5>
                  <div className="wrapper1 ">
                    <div className="circle-out">
                      <div id="bar" className="circle circle-2"></div>
                      <span className="text">100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="">
                  <h5 className='pro-title'>Quality</h5>
                  <div className="wrapper1 ">
                    <div className="circle-out">
                      <div id="bar" className="circle circle-3"></div>
                      <span className="text">84%</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                <div className="">
                  <h5 className='pro-title'>OEE</h5>
                  <div className="wrapper1 ">
                    <div className="circle-out">
                      <div id="bar" className="circle circle-4"></div>
                      <span className="text">63%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="p-0 m-0 container">
              <div className="row p-0 m-0">
                <div className="col-md-12 d-flex m-0">
                  <div className="row">
                    <div className="card1">
                      <h5 className='title1'>5837</h5>
                      <p className='des1'>Total Finished Product</p>
                    </div>
                    <div className="card1">
                      <h5 className='title1'>28</h5>
                      <p className='des1'>Working Producing</p>
                    </div>
                    <div className="card1">
                      <h5 className='title1'>1</h5>
                      <p className='des1'>Machine Producing</p>
                    </div>

                    <div className="card2">
                      <h5 className='title1'>1039</h5>
                      <p className='des1'>lfdfdfdffd</p>
                    </div>
                    <div className="card1">
                      <h5 className='title1'>0</h5>
                      <p className='des1'>lfdfdfdffd</p>
                    </div>
                    <div className="card1">
                      <h5 className='title1'>0</h5>
                      <p className='des1'>lfdfdfdffd</p>
                    </div>


                  </div>
                </div>

              </div>

            </div>

            <div className="p-0 m-0 container1 w-100">
              <div className="row mt-4 ">
                <div className="col-md-4 feed-cards">
                  
                  <h5 className='p-0 m-0'>Activity Feed</h5>
                  <div className="card3">
                    <p className='title3'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugit doloribus necessitatibus vitae.
                    </p>
                    <hr />
                    <p className='title3'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugit doloribus necessitatibus vitae.
                    </p>
                    <hr />
                    <p className='title3'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fugit doloribus necessitatibus vitae.
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="col-md-4  feed-cards">
                  <h5>Production Orders in Progress </h5>
                  <div className="card3">
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>

                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                    <p className='progress-bar'>
                      77.89%
                    </p>
                  </div>
                </div>
                <div className="col-md-4  feed-cards">
                  <h5>Production orders Finished </h5>
                  <div className="card3">
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>

                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                    <p className='progress-bar1'>
                      77.89%
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="h-100">
            <div>

            </div>
          </div>

        </div>

        {/* <div class="tab-pane" id="2a">
              <h3>Worker Status</h3>
            </div>
            <div class="tab-pane" id="3a">
              <h3> Operation Status</h3>
            </div>
            <div class="tab-pane" id="4a">
              <h3> Machine Status</h3>
            </div> */}

      </div >



    </>
  );
};

export default Home;




export function App() {
  return <Bar options={options} data={data} />;
}

