import {BASEURL} from '../services/url';

export const invoke = (url) => {
    console.log('Invoked URL: ',`${BASEURL}${url}`);
    return fetch(`${BASEURL}${url}`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
};