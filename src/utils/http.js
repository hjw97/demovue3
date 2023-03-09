import axios from "axios";
import { ElMessage } from "element-plus";


/**代码开始*/
import axios from 'axios'
const service = axios.create({
    baseURL:'/api',   //baseUrl会自动加载请求地址上
    timeout:3000
})


//添加请求拦截
service.interceptors.request.use(function (config) {
  //在发送请求之前做些什么
  //config.headers['token'] = getToken('token')
  if (localStorage.getItem('token')) {//括号里面的token是你自己定义的，因为我在我的登录界面的时候，就把后端返回的token存在localStroage，同时命名为token，所以这里你们可以自己根据自己的项目进行修改。如果
        config.headers['token'] = localStorage.getItem('token');//添加上去请求头
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })
  // 添加响应拦截器
  service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let {status ,message} = response.data;
    if(status !=100){
        ElMessage({message: 'error', type: 'error'})
    }else{
        ElMessage({message: 'success',type: 'success'})
        return Promise.reject(response.data)
    }
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  })

  export default service     //一定要暴露出去，不然取不到 
/**代码end*/
