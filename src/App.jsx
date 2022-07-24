// App.jsx

// 🔽 Link を追加
// Routerを使うことで、別の場所からファイルを引っ張ってきたり、
// 飛ばしたりすることができるようにしている
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Omikuji } from "./pages/Omikuji";
// import { Janken } from "./pages/Janken";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <h1>react app</h1>
//       {/* 🔽 追加 */}
//       <ul>
//         <li>
//           <Link to="/omikuji">おみくじ</Link>
//         </li>
//         <li>
//           <Link to="/janken">じゃんけん</Link>
//         </li>
//       </ul>
//       <hr />
//       <Routes>
//         <Route path="/omikuji" element={<Omikuji />} />
//         <Route path="/janken" element={<Janken />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;

import React from 'react';
// import './App.css';
import { FileSelect } from './FileSelect';
import { Report } from './Report';
import { readFileAsText, mapCSVToArray } from './helpers';
import { mapArrayToWorkItem } from './WorkItem';
let file;



// →Appの初期状態をclass App extends...で設定できる。
// 関数が入れ子構造になっているので、上の階層の関数が実行されると
// 下の階層の関数も次々に実行される仕組みになっている
class App extends React.Component {
  state = { screen: 'home', items: [] };
// handlesubmitは、入力された値やファイルについてバリデーション（検証）
// を行ってから、問題がなければ送信するメソッド。
// asyncは、awaitとセットで使用して非同期処理の制御を実現するための文法。
// 非同期処理が含まれる関数については、関数の前にawaitをつけると処理が終わるまで待っていてくれる。
// その代わりasyncを用いた節の中でしか、awaitは使えない。
  handleSubmit = async  => {
    try {
      // ファイルをテキストデータとして読み込み。この処理が終わるまで後続の処理が保留される
      const csv = readFileAsText(file);
      // 予め定義しといた関数でファイルデータをarray（順序がついたデータの並び）に変換
      const arr = mapCSVToArray(csv);
      // 予め定義しといた関数でarrayをworkitemに切り替え
      const items = mapArrayToWorkItem(arr);
      // screenをreportに切り替え
      this.setState({ screen: 'report', items });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">架電リスト読み込み</h1>
        </header>
        {this.state.screen === 'home' ? (
          <FileSelect onSubmit={this.handleSubmit} />
        ) : (
          <Report items={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;