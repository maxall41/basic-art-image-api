import { Router } from 'express';
import art from './routes/art';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	art(app);

	return app;
};
