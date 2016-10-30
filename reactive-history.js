import {ReactiveVar} from 'meteor/reactive-var';

const currentUrl = new ReactiveVar(location.pathname);


export const navigate = url => {
	currentUrl.set(url);
	window.history.pushState({}, null, url);
};

export const link = ev => {
	ev.preventDefault();
	navigate(ev.currentTarget.pathname);
};

export const start = () => {
	currentUrl.set(location.pathname);
	window.addEventListener('popstate', () => {
		currentUrl.set(location.pathname);
	});
};

export const history = currentUrl;
