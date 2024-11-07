

export const setTokens = (accessToken: string, expiresIn: string) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('expires_in', expiresIn);
};


export const getAccessToken = () => {
    return localStorage.getItem('access_token');
};


export const clearTokens = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
};

export const shouldRefreshToken = () => {
    const expiresIn = localStorage.getItem('expires_in');
    if (expiresIn) {
        const expiryTime = new Date(expiresIn).getTime();
        const now = Date.now();
        return now >= expiryTime
    }
    return false;
};
