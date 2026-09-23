function emailNotification(message: string) {
	console.log('Email: ' + message);
}

function smsNotification(message: string) {
	console.log('SMS: ' + message);
}

function pushNotification(message: string) {
	console.log('Push: ' + message);
}

function whatsappNotification(message: string) {
	console.log('WhatsApp: ' + message);
}

type NotificationType = 'email' | 'push' | 'sms' | 'whatsapp';

function createNotification(type: NotificationType) {
	switch (type) {
		case 'email':
			return emailNotification;
		case 'sms':
			return smsNotification;
		case 'push':
			return pushNotification;
		case 'whatsapp':
			return whatsappNotification;
	}
}
