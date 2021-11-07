import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import Logger from './logger';

export default async ({ expressApp }) => {
	// Injects dependencies
	await dependencyInjectorLoader();
	Logger.info('✌️ Dependency Injector loaded');

	await expressLoader({ app: expressApp });
	Logger.info('✌️ Express loaded');
};
