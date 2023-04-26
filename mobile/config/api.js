const http = uni.$u.http
class HttpApi {
	constructor() {};
	getMenu() {
		return http.get('/dataApi/news/navlist.php')
	};
}
// post请求，获取菜单
// export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
// export const getMenu = (data) => http.get('/ebapi/public_api/index', data)
export const httpApi = new HttpApi();