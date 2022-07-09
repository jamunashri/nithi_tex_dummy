import { Sidebar, Navbar } from "../../Admin/index";
import { useState } from "react";
import "../NewUser/index.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewCategory = ({ title, inputs }) => {
  const history = useHistory();
  const [values, setValue] = useState({
    CategoryName: "",
    ImagePath: "",
    CreatedBy: "1",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.CategoryName && values.ImagePath) {
      const data = {
        CategoryName: values.CategoryName,
        CategoryImagePath: values.ImagePath,
        CreatedBy: "1",
      };
      axios
        .post("http://api.nidhitex.com/api/Category/InsertCategory", data)
        .then((res) => {
          const { data : {HasError, ResponseMessage }} = res
          if(HasError) {
            setError(ResponseMessage)
          } else {
            history.push("/admin/category");
          }
        })
    } else {
      setError("Please enter all the fields");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "name");
    setValue({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => {
                const { labels, name, placeholder, id, type } = input;
                return (
                  <div className="formInput" key={id}>
                    <label>{labels}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      name={name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                );
              })}
              {error && <span className="error">{error}</span>}
              <button onClick={(e) => handleSubmit(e)}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
