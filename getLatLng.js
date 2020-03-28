const config = require('./config.json');
const axios = require('axios');
let { NAVER_API_KEY, NAVER_API_SECRET, AWS_CHEMI_URL } = config;

const url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode';

axios
  .get(url, {
    params: {
      query: '분당구 불정로 6'
    },
    headers: {
      'X-NCP-APIGW-API-KEY-ID': NAVER_API_KEY,
      'X-NCP-APIGW-API-KEY': NAVER_API_SECRET
    }
  })
  .then(res => {
    console.log(res.data);
  });



// 데이터 aws에 넣기.



// let data = [
//   [1, '반달마을 푸르지오', 127.0677091, 37.232907, '양**', 4, '경기도 화성시 영통로26번길 24'],
// ]

// let postData = {}

// const main = async () => {
//   for (let i of data) {
//     postData.id = i[0]
//     postData.title = i[1]
//     postData.lng = i[2]
//     postData.lat = i[3]
//     postData.buyerName = i[4]
//     postData.ea = i[5]
//     postData.addr = i[6]

//     await axios.post(AWS_CHEMI_URL, postData)
//       .then((res) => {
//         console.log(res.data)
//       })
//   }
//   console.log('finish')
// }


// main()