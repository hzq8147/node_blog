export default {
    defaults:{
        timeout: 60000,
        withCredentials: true,
        transformRequest:[function (data){
            let ret = '';
            ret = JSON.stringify(data);
            return ret;
        }]
    }
}
