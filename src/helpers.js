let string;

export const readFileAsText = ({ file }) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error);
      reader.onload = () => resolve((reader.result) || '');
      reader.readAsText(file);
    });
  }
  
export const mapCSVToArray = ({ csv }) => {
    return csv.split('\n').map((row) => row.split(','));
  }
  

  