// 每次调用ajax时，会先调用ajaxPrefiter这个函数
// 在这个函数中可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
	// console.log(options.url);
	// 再发起真正的ajax之前统一拼接根路径
	options.url = "http://www.liulongbin.top:3007" + options.url;

	// 统一为有权限的接口设置请求头
	if (options.url.indexOf("/my/") !== -1) {
		options.headers = {
			Authorization: localStorage.getItem("token") || "",
		};
	}

	// 全局统一挂载complete回调函数
	options.complete = function (res) {
		// console.log("执行了 complete");
		// console.log(res);
		// 在complete回调函数中，可以使用res.responseJSON 拿到服务器响应回来的数据
		if (
			res.responseJSON.status === 1 &&
			res.responseJSON.message === "身份认证失败！"
		) {
			// 1.强制清空token
			localStorage.removeItem("token");
			// 2.强制跳转到登录页面
			location.href = "/login.html";
		}
	};
});
