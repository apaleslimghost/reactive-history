import {ReactiveVar} from 'meteor/reactive-var';

export const history = new ReactiveVar(location.pathname);
export const state = new ReactiveVar({});

export const setUrl = url => {
	history.set(url);
};

export const setState = s => {
	state.set(s);
};

export const setUrlFromLocation = () => {
	setUrl(location.pathname);
};

export const setStateFromHistory = () => {
	setState(window.history.state);
};

const handlePopstate = (ev) => {
	setUrlFromLocation();
	setState(ev.state);
};

export const navigate = (url, state = {}) => {
	setUrl(url);
	setState(state);
	window.history.pushState(state, null, url);
};

export const link = ev => {
	ev.preventDefault();
	navigate(ev.currentTarget.pathname);
};

export const start = () => {
	setUrlFromLocation();
	setStateFromHistory();
	window.addEventListener('popstate', handlePopstate);
};

export const stop = () => {
	window.removeEventListener('popstate', handlePopstate);
};
