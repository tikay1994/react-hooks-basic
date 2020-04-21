import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchChange(e) {
    const values = e.target.value;
    setSearch(values);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        search: values,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <input type="text" value={search} onChange={handleSearchChange}></input>
  );
}

export default PostFiltersForm;
