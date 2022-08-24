import * as React from "react";

const SortByDropdown = ({ setSortBy }) => {
  const clickEvent = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <select onChange={clickEvent}>
        <option value="votes">Votes</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comment Count</option>
      </select>
    </div>
  );
};

export default SortByDropdown;
