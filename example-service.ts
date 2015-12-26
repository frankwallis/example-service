import {Injectable} from 'angular2/core';

@Injectable()
export class ExampleService {

	constructor() {
		this.cache = new Map<string, string>();
	}

	private cache: Map<string, string>;

	greet(name: string): string {
		name = name || "clint"; // obligatory
		let greeting = this.cache[name] ? this.cache[name] : "Hello " + name;
		this.cache[name] = greeting;

		return greeting;
	}

	greetAsync(name: string): Promise<string> {
		return Promise.resolve(this.greet(name));
	}
}
