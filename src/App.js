import React, { Suspense } from "react";
import "./assets/scss/style.scss"
// ** Router Import
import Router from "./router/Router";

const App = () => {
  return (
    <Suspense fallback={<> <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
  </div>
  <h1 className='loding'>Loding ....</h1>
    </>} >
      <Router />

    </Suspense>
  );
};

export default App;
