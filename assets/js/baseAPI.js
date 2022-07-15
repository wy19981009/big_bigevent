// 每次调用ajax时，会先调用ajaxPrefiter这个函数
// 在这个函数中可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
	// console.log(options.url);
	// 再发起真正的ajax之前统一拼接根路径
	options.url = "http://www.liulongbin.top:3007" + options.url;
});
