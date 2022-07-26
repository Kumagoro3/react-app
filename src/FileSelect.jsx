import * as React from 'react';


export class FileSelect extends React.Component {

  handleShowReport = async () => {
    if (!this.file.files || !this.file.files[0]) {
      return;
    }
    this.props.onSubmit(this.file.files[0]);
  };

  render() {
    return (
      <div>
        <p className="App-intro">CSVファイルを選択してください。</p>
        <input
          type="file"
          className="file"
          ref={(file) => (this.file = file)}
          accept="text/csv"
        />
        <button onClick={this.handleShowReport}>Show Report</button>
        <br />
        <p>
          <a
            href="https://raw.githubusercontent.com/mikehibm/react-csv-example/master/public/sample_data.csv"
            target="_blank"
          >
            サンプルデータ（右クリックして保存）
          </a>
        </p>
      </div>
    );
  }
}