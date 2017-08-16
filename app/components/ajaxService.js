export default {
	//发送post查询
	sendAjax(urll, paramsl) {
		return new Promise(function(resolve, reject) {
			fetch(urll, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(paramsl)
			}).then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
				}
			}).then((data) => {
				resolve(data)
			}).catch((err) => {
				reject(err)
			})
		})
	}

}