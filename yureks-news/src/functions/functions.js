import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://yureks-app.herokuapp.com/api/topics")
    .then((res) => {
      return res.data.topics;
    });
};

export const getArticles = () => {
  return axios
    .get("https://yureks-app.herokuapp.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleByTopic = (topic) => {
  return axios
    .get(`https://yureks-app.herokuapp.com/api/articles?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleById = (id) => {
  return axios
    .get(`https://yureks-app.herokuapp.com/api/articles/${id}`)
    .then((res) => {
      return res.data.article;
    });
};

export const getArticleComments = (id) => {
  return axios
    .get(`https://yureks-app.herokuapp.com/api/articles/${id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};
