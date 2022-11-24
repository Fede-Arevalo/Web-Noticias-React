import React, { useState, useEffect } from "react";
import "./Form.scss";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const initialState = {
    name: "",
    email: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (data.name.length < 3) {
      setMessage("Tu nombre debe tener al menos 3 caracteres");
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
    console.log("sending data..." + data.name + " " + data.email);
    localStorage.setItem("user", JSON.stringify(data));
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
              placeholder="nombre"
              onChange={handleInputChange}
              name="name"
              value={data.name}
            />
            <input
              type="email"
              placeholder="email"
              onChange={handleInputChange}
              name="email"
              value={data.email}
            />
            <button type="submit" disabled={btnDisabled}>
              Submit
            </button>
          </form>
          <p>{visible ? message : "Redireccionandote al Home..."}</p>
          
        </div>
      </div>
    </>
  );
};

export default Form;
