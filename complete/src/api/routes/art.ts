import { Router, Request, Response } from 'express';
import ImageService from '@/services/image';
import { Container } from 'typedi';
import path from 'path';
import config from '@/config';
import { celebrate, Joi } from 'celebrate';
const route = Router();
export default (app: Router) => {
	app.use('/art', route);

	route.get(
		'/',
		celebrate({
			query: Joi.object({
				x: Joi.number(),
				y: Joi.number()
			})
		}),
		async (req: Request, res: Response) => {
			// Get the image service
			const imageService = Container.get(ImageService);
			// Pick random image
			const image = await imageService.pickRandomFileInDirectory(path.join(__dirname, '../../art'));
			const bufferImage = await imageService.resizeImage(
				path.join(__dirname, '../../art/' + image),
				//@ts-ignore
				parseInt(req.query.x || config.defaultImageSize),
				//@ts-ignore
				parseInt(req.query.y || config.defaultImageSize)
			);
			return res.send(bufferImage);
		}
	);
};
