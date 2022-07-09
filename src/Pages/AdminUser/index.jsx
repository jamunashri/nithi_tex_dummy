import "./index.scss";
import { useState, useEffect } from "react";
import { Sidebar, Navbar, Datatable } from "../../Admin/index";
import axios from "axios";

const AdminUser = ({ title }) => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const categoryRows = [
    {
      id: 1,
      CategoryID: 1,
      CategoryName: "Snow",
      CategoryImagePath:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ActiveStatus: true,
    },
    {
      id: 2,
      CategoryID: 2,
      CategoryName: "Snow",
      CategoryImagePath:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ActiveStatus: true,
    },
  ];
  const categoryColumns = [
    { field: "CategoryID", headerName: "ID", width: 70 },
    {
      field: "CategoryImagePath",
      headerName: "Image",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "CategoryName",
      headerName: "Category",
      width: 230,
    },

    {
      field: "ActiveStatus",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
         <>{params.row.ActiveStatus ? 'Active': 'Inactive'}</>
        );
      },
    },
  ];
  useEffect(() => {
    switch (title) {
      case "Add New Category": {
        axios
          .get(
            "http://api.nidhitex.com/api/Category/LoadCategoryList?CategoryID=0"
          )
          .then((res) => {
            console.log(res);
            const {
              data: { HasError, ResponseMessage, Data },
            } = res;
            console.log(Data, "data");
            const arr = Data.map((x) => {
              x.id = x.CategoryID;
              return x;
            });
            console.log(arr);
            setRows(arr);
          });

        setColumns(categoryColumns);
      }
      case "Add new Product": {
        setRows(categoryRows);
        setColumns(categoryColumns);
      }
      case "Add new Users": {
        setRows(categoryRows);
        setColumns(categoryColumns);
      }
    }
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={title} rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default AdminUser;
