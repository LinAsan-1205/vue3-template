import store from 'store';

export const setStore = <T = any, D = any>(key: string, data: T): D => {
	return store.set(key, data);
};
export const getStore = <D = any>(key: string): D => {
	return store.get(key);
};

export const removeStore = (key: string) => {
	store.remove(key);
};
