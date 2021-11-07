import { Service, Inject } from 'typedi';
import fs from 'fs';
import sharp from 'sharp';

@Service()
export default class ImageService {
	public async resizeImage(path: string, x: number, y: number) {
		// Resize image using sharp and save it as a buffer
		const image = await sharp(path).resize(x, y).toBuffer();
		// Return the buffer
		return image;
	}

	public async pickRandomFileInDirectory(path: string) {
		// Get all files in directory
		const files = fs.readdirSync(path);
		// Pick random file in directory
		const file = files[Math.floor(Math.random() * files.length)];
		// Return the file name
		return file;
	}
}
