import React, { useState, useEffect } from "react";
import "./Form.scss";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    section: "sport",
    title: "",
    abstract: "",
    byline: "",
    published_date: `${year}-${month}-${day}`
  });

  const initialState = {
    section: "",
    title: "",
    abstract: "",
    byline: "",
    published_date: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (data.section.length < 3) {
      setMessage("Your section must have at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("author", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate("/listNews");
    }, 1000);
    setVisible(false);
  };

  return (
    <>
      <div className="form">
        <div className="wrapForm">
          <h1>Form News</h1>
          <p>Create your news in this form</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="section"
              onChange={handleInputChange}
              name="section"
              value={data.section}
            />
            <input
              type="text"
              placeholder="title"
              onChange={handleInputChange}
              name="title"
              value={data.title}
            />
            <input
              type="text"
              placeholder="abstract"
              onChange={handleInputChange}
              name="abstract"
              value={data.abstract}
            />
            <input
              type="text"
              placeholder="author"
              onChange={handleInputChange}
              name="byline"
              value={data.byline}
            />
            <button type="submit" disabled={btnDisabled}>
              Submit
            </button>
          </form>
          <p>{visible ? message : "Redirecting to Home..."}</p>
        </div>
      </div>
    </>
  );
};

export default Form;
