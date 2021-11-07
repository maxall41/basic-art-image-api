import { Service, Inject } from 'typedi';

@Service()
export default class ImageService {
	constructor(@Inject('logger') private logger) {}

	public async resizeImage() {
		// Add code here to resize image
	}

	public async pickRandomFileInDirectory() {
		// Add code here to pick random file in directory
	}
}
