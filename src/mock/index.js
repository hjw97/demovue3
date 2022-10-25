// 引入mockjs
import Mock from "mockjs";
// 获取 mock.Random 对象
const Random = Mock.Random;
 
// 使用mockjs模拟数据
let tableList = [
  {
    id: "5ffa80aD-9CF4-0C77-eBFC-f6612BfAcF4F",
    account: "admin",
    password: "123456",
    address: "36918166@qq.com",
  },
  {
    id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc831",
    account: "ebHoL6",
    password: "i320Hu74fbn2Gi",
    address: "48165263@qq.com",
  },
]
 
// for (let i = 0; i < 20; i++) {
//   let newObject = {
//     id: Random.guid(), // 获取全局唯一标识符
//     account: /^[a-zA-Z0-9]{4,6}$/,
//     password: /^[a-zA-Z]\w{5,17}$/,
//     address: /[1-9]\d{7,10}@qq\.com/,
//   };
//   tableList.push(newObject);
// }
 
/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGetList", "get", () => {
  return {
    code: "0",
    data: tableList,
  };
 
});
 
/** post请求添加表格数据 */
Mock.mock("/api/add", "post", (params) => {
  let newData = JSON.parse(params.body);
  newData.id = Random.guid();
  tableList.push(newData);
  return {
    code: "0",
    message: "success",
    data: tableList,
  };
});