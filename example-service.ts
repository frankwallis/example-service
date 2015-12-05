import {Injectable} from 'angular2/angular2';

@Injectable()
export class ExampleService {

	constructor() {
		this.cache = new Map<string, string>();
	}

	private cache: Map<string, string>;

	greet(name: string): Promise<string> {
		name = name || "clint"; // obligatory
		let greeting = this.cache[name] ? this.cache[name] : "Hello " + name;
		this.cache[name] = greeting;

		return Promise.resolve(greeting);
	}
}
