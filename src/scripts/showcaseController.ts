import { setupDetailGalleries } from './detailGallery';
import { setupWheelControllers, type WheelControllerOptions } from './wheelController';

export type ShowcaseControllerOptions = WheelControllerOptions & {
	gallerySelector: string;
};

export const setupShowcaseControllers = ({
	gallerySelector,
	detailSelector,
	changeEvent,
	...wheelOptions
}: ShowcaseControllerOptions) => {
	setupWheelControllers({
		...wheelOptions,
		detailSelector,
		changeEvent,
	});

	setupDetailGalleries({
		gallerySelector,
		detailItemSelector: detailSelector,
		detailChangeEvent: changeEvent,
	});
};
