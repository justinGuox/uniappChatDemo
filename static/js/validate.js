const validate = {
	// 是否为空
	isNull(str=''){
		return !/\S/.test(str)
	},
	// 是否手机
	isPhone(phone=''){
		return /^1[3-9]{1}[0-9]{9}$/.test(phone)
	},
	// 邮箱
	isEmail(email=''){
		return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/.test(email)
	}
}
export default validate