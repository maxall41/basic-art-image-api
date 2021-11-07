import { Router, Request, Response } from 'express';
const route = Router();
export default (app: Router) => {
	app.use('/art', route);

	route.get('/', (req: Request, res: Response) => {
		/**
     * Code here to handle image requests
     */
		return res.send('🖼');
	});
};
