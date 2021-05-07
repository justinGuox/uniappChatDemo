const util = {
	loading(title='加载中'){
		uni.showLoading({ title })
	},
	toast(title='', icon='none'){
		return uni.showToast({ title, icon })
	},
	getHeader(){
		return {
			'Authorization': uni.getStorageSync('userToken')
		}
	}
}
export default util