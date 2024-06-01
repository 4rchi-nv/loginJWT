const lsTokenKey = 'my__token';

function setToken(req) {
    const isAuthUrl = req.url.includes('auth');
    if (!isAuthUrl) {
        const token = localStorage.getItem(lsTokenKey);
        req.headers['Authorization'] = `Bearer ${token}`;
    }
    return req
}

function setTokenOnLogin(res) {
    const isLoginUrl = res.config.url.includes('login');

    if (isLoginUrl) {
        const token = res.data.access_token;
        localStorage.setItem(lsTokenKey, token);
    }

    return res;
}

function getClearResponse(res) {
    return res.data;
}

function onError(err) {
    console.dir(err);
    Promise.reject(err)
}


export default function(axios) {
    axios.interceptors.request.use(setToken);
    axios.interceptors.response.use(setTokenOnLogin);
    axios.interceptors.response.use(getClearResponse, onError);
}