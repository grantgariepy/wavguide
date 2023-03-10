import crypto from 'crypto';

export const serializeNonPOJOs = (obj: any) => {
	return structuredClone(obj);
};

export const generateUsername = (name: string) => {
	const id = crypto.randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (
	collectionId: string,
	recordId: string,
	fileName: string,
	size = '0x0'
) => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}/?thumb=${size}`;
};

export const validateData = async (
	formData: Iterable<readonly [PropertyKey, any]>,
	schema: { parse: (arg0: { [k: string]: any }) => any }
) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err: any) {
		console.log('Error:', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};
