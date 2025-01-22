import React from 'react';
import {render} from '../../src/index.js';

const Test = () => {
	throw new Error('errored');
};

const app = render(<Test />);

const run = async () => {
	try {
		await app.waitUntilExit();
	} catch (error: unknown) {
		console.log((error as any).message);
	}
};

void run();
