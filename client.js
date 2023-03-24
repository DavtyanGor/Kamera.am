import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'c6oit2l9',
	dataset: 'production',
	apiVersion: '2022-11-10',
	token: import.meta.REACT_KAMERA_AM_ACCESS_KEY,
	useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
	return builder.image(source);
}
