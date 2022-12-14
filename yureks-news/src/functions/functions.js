import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://yureks-app.herokuapp.com/api/topics")
    .then((res) => {
      return res.data.topics;
    });
};

export const getArticles = (paramsObj) => {
  if (paramsObj) {
    return axios
      .get("https://yureks-app.herokuapp.com/api/articles?limit=100", {
        params: paramsObj,
      })
      .then((res) => {
        return res.data.articles;
      });
  } else {
    return axios
      .get("https://yureks-app.herokuapp.com/api/articles?limit=100")
      .then((res) => {
        return res.data.articles;
      });
  }
};

export const getArticleByTopic = (topic, paramsObj) => {
  if (paramsObj) {
    return axios
      .get(
        `https://yureks-app.herokuapp.com/api/articles?topic=${topic}&limit=100`,
        {
          params: paramsObj,
        }
      )
      .then((res) => {
        return res.data.articles;
      });
  }
  return axios
    .get(
      `https://yureks-app.herokuapp.com/api/articles?topic=${topic}&limit=100`
    )
    .then((res) => {
      return res.data.articles;
    });
};

export const getArticleById = (id) => {
  return axios
    .get(`https://yureks-app.herokuapp.com/api/articles/${id}?limit=100`)
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

export const addArticleLike = (id, body) => {
  return axios
    .patch(`https://yureks-app.herokuapp.com/api/articles/${id}`, body)
    .then((res) => {
      return res.data.article;
    });
};

export const postComment = (id, body) => {
  return axios
    .post(`https://yureks-app.herokuapp.com/api/articles/${id}/comments`, body)
    .then((res) => {
      return res.data.comment;
    });
};

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export const getCommentById = (id) => {
  return axios
    .get(`https://yureks-app.herokuapp.com/api/comments/${id}`)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteCommentById = (id) => {
  return axios
    .delete(`https://yureks-app.herokuapp.com/api/comments/${id}`)
    .then((res) => {
      return "Successfully deleted!";
    })
    .catch(() => {
      return "Error when deleting!";
    });
};
