import * as moment from 'moment';


export function mapArrayToWorkItem(data){
  return data
    .map((row) => {
      const startDate = moment(`${row[4]} ${row[5]}`, 'YYYY-MM-DD HH:mm:ss');
      const endDate = moment(`${row[6]} ${row[7]}`, 'YYYY-MM-DD HH:mm:ss');
      const duration = moment.duration(endDate.diff(startDate));
      return {
        user: row[0],
        client: row[1],
        project: row[2],
        description: row[3],
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        duration: duration.asHours()
      };
    })
    .filter((i) => i.client !== 'Client' && i.client); // 先頭と末尾の行を除外。
}