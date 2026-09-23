interface NotificationService {
	send(to: string, message: string): void;
}

class EmailService implements NotificationService {
	send(to: string, message: string): void {
		console.log(`Email enviado a ${to}: ${message}`);
	}
}

class UserService {
	notificationService: NotificationService;

	constructor(notificationService: NotificationService) {
		this.notificationService = notificationService;
	}

	registerUser(email: string) {
		console.log(`Usuario registrado: ${email}`);
		this.notificationService.send(email, 'Bienvenido a la aplicación');
	}
}
