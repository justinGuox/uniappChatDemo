const baseUrl = 'http://localhost'
const API = {
	staticPath: 'http://localhost',
	baseUrl,
	upload: baseUrl + '',				// 上传附件
	uploadGroupFace: baseUrl + '',		// 上传群头像
	uploadUserFace: baseUrl + '',		// 上传用户头像
	login: baseUrl + '',				// 登录
	addFriend: baseUrl + '',			// 添加好友
	getFriends: baseUrl + '',			// 获取好友
	getUserInfo: baseUrl + '',			// 获取个人信息
	addSingleMsg: baseUrl + '',			// 发送单聊消息
	getMsgRecord: baseUrl + '',			// 获取消息记录
	getSingleRecord: baseUrl + '',		// 获取单聊记录
	createGroup: baseUrl + '',			// 创建群聊
	quitGroup: baseUrl + '',			// 退出群聊
	delGroup: baseUrl + '',				// 删除群聊
	getGroupDetail: baseUrl + '',		// 获取群详情
	getGroupToken: baseUrl + '',		// 获取群聊token
	getGroups: baseUrl + '',			// 获取我的群聊
	updateGroupName: baseUrl + '',		// 修改群名称
	getGroupMember: baseUrl + '',		// 获取群成员
	addGroupMember: baseUrl + '',		// 新增群成员
	addGroupMsg: baseUrl + '',			// 发送群聊消息
	getGroupMsg: baseUrl + '',			// 获取群聊消息
}
export default API