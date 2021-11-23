export const API_URL = "http://localhost:3001/api/";
export const ARTICLES_URL = "http://localhost:3001/api/articles";
export const COMMENTS_URL = articleId => `${ARTICLES_URL}/${articleId}/comments`;