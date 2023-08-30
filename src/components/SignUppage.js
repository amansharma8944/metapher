import "bootstrap/dist/css/bootstrap.min.css";
import "./signuppage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {
  const dataInitial = {
    Name: "",
    Email: "",
    YoutubeLink: "",
  };
  const navigate = useNavigate();

  const [dataInput, setDataInput] = useState(dataInitial);
  const onInputChange = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    navigate("/SignUpDone");
  };

  return (
    <>
      <div className="container">
        <div className="custom-section mx-auto">
          <img src="/magpiie.png" className="img-set" height="30" />
          <h3 className="signup-description">
            Create your free Magpiie account
          </h3>

          <hr />

          <form className="signup-form signup-basic-form">
            <div className="custom-form-item">
              <label for="userName">Full Name</label>
              <input
                id="userName"
                type="text"
                placeholder="Enter Full Name"
                name="Name"
                value={dataInput.Name}
                onChange={onInputChange}
              />
            </div>

            <div className="custom-form-item">
              <label for="userEmail">Email</label>
              <input
                type="email"
                id="userEmail"
                placeholder="EMAIL"
                name="Email"
                value={dataInput.Email}
                onChange={onInputChange}
              />
            </div>
            <div className="custom-form-item">
              <label for="YoutubeLink">Youtube Link</label>
              <input
                id="YoutubeLink"
                placeholder="Youtube link"
                name="YoutubeLink"
                value={dataInput.YoutubeLink}
                onChange={onInputChange}
              />
            </div>
            <button className="btn-submit" onClick={formSubmit}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
