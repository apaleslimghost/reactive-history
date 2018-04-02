import {ReactiveVar} from 'meteor/reactive-var';

const currentUrl = new ReactiveVar(location.pathname);

export const setUrl = url => {
	currentUrl.set(url);
};

export const setUrlFromLocation = () => {
	setUrl(location.pathname);
};

export const navigate = url => {
	setUrl(url);
	window.history.pushState({}, null, url);
};

export const link = ev => {
	ev.preventDefault();
	navigate(ev.currentTarget.pathname);
};

export const start = () => {
	currentUrl.set(location.pathname);
	window.addEventListener('popstate', setUrlFromLocation);
};

export const stop = () => {
	window.removeEventListener('popstate', setUrlFromLocation);
};

export const history = currentUrl;
