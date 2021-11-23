import axios from 'axios';
import authHeader from './auth-header';
import { ARTICLES_URL, COMMENTS_URL } from '../constants';

const getUserArticles = () => {
  return axios.get(ARTICLES_URL, { headers: authHeader() });
}

const getUserArticle = id => {
  return axios.get(ARTICLES_URL + `/${id}`, { headers: authHeader() });
}

const getUserComments = articleId => {
  return axios.get(COMMENTS_URL(articleId), { headers: authHeader() });
}

const getUserComment = (articleId, commentId) => {
  return axios.get(COMMENTS_URL(articleId) + `/${commentId}`, { headers: authHeader() });
}

export { getUserComment, getUserComments, getUserArticles, getUserArticle };