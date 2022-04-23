export interface User {
	id: number;
	username: string;
	email: string;
	password: string;
}

export interface Token {
	email: string;
	id: number;
}
