// index.js

import React from "react";
import ReactDOM from "react-dom/client";
// DOMは、DocumentObjectModelの略。HTMLをJavascriptから参照したり変更したりする際に、
// HTMLを階層化することによって捉えるためのフレームワーク。
import App from "./App";
// reportwebvitalsは、Webページのパフォーマンスを計測するためなどにあるツール
// reactjsを起動すると勝手についてくる。
// reportWebVitals(console.log)などで使える;
import reportWebVitals from "./reportWebVitals";
import './index.css';
// registerserviceworkerを使うことでユーザーが
// キャッシュを使えるようになる（ただし本番環境のみ）
// import registerServiceWorker from './registerServiceWorker';

// 以前は.renderのみでページ描画（レンダリング）ができ、今もできるが
// .createrootを使うことで、非同期的なレンダリングが可能になり
// ユーザーが操作していてもページ描画されるのでUXが向上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // stricemodeを使うことで旧式になった機能を教えてくれる
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
// registerServiceWorker();

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
