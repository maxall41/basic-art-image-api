import { Container } from 'typedi';
import formData from 'form-data';
import LoggerInstance from './logger';

export default () => {
	try {
		Container.set('logger', LoggerInstance);

		LoggerInstance.info('✌️ Injected Logger into container');
	} catch (e) {
		LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
		throw e;
	}
};
