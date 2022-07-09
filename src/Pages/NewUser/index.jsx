import "./index.scss";
import { Sidebar, Navbar} from '../../Admin/index'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewUser = ({ title, inputs }) => {
  const [file, setFile] = useState("");
// const title = "Add new user"
//  const inputs = [
//   {
//     id: 1,
//     label: "Name",
//     type: "text",
//     placeholder: "",
//   },
//   {
//     //Needs to change as select box
//     id: 2,
//     label: "Category",
//     type: "text",
//     placeholder: "",
//   },
//   {
//     id: 3,
//     label: "SKU Number",
//     type: "text",
//     placeholder: "",
//   },
//   {
//     id: 4,
//     label: "Video URL",
//     type: "text",
//     placeholder: "",
//   },
//   {
//     id: 5,
//     label: "Color",
//     type: "text",
//   },
//   {
//     id: 6,
//     label: "Quantity",
//     type: "number",
//     placeholder: "",
//   },
//   {
//     id: 10,
//     label: "Price",
//     type: "text",
//   },
//   {
//     id: 11,
//     label: "Reseller Price",
//     type: "text",
//   },
//   {
//     id: 7,
//     label: "Length",
//     type: "text",
//   },
//   {
//     id: 8,
//     label: "Weight",
//     type: "text",
//   },
//   {
//     id: 9,
//     label: "Blouse Attached",
//     type: "text",
//   },
//   {
//     id: 12,
//     label: "Discount",
//     type: "text",
//   },
//   {
//     id: 13,
//     label: "Description",
//     type: "textarea",
//   },
 
// ];
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
