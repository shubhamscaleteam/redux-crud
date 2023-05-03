import React from "react";
import Table from "react-bootstrap/Table";

// redux...!!
import { useDispatch, useSelector } from "react-redux";

//bootstrep...!!
import Button from "react-bootstrap/Button";

//react icons...!!
import { AiFillDelete, AiOutlineHighlight } from "react-icons/ai";

// react-router-dom ...!!
import { useNavigate } from "react-router-dom";
import { deleteInfo } from "../redux/action/action";



const TablePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selector = useSelector((state) => state.allInformation);

  const homePage = () => {
    navigate("/");
  };

  const formPage = () => {
    navigate("/form");
  };

  const deleteInformation = (x) => {
    dispatch(deleteInfo(x));
  };

  const editInformation = (x) => {
    navigate(`/form/${x}`);    
  };

  return (
    <div>
      <h1>SUBSCRIBERS</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selector.map((elm, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elm.id}</td>
                <td>{elm.fname}</td>
                <td>{elm.lname}</td>
                <td>{elm.gender}</td>
                <td>{elm.hobbies}</td>
                <td>{elm.email}</td>
                <td>
                  <Button
                    onClick={() => deleteInformation(elm.id)}
                    variant="light"
                    className="ms-2"
                    size="sm"
                  >
                    <AiFillDelete size={25} />
                  </Button>
                  <Button
                    onClick={() => editInformation(elm.id)}
                    variant="light"
                    className="ms-2 "
                    size="sm"
                  >
                    <AiOutlineHighlight size={25} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Button type="button" variant="dark" className="me-2" onClick={homePage}>
        Home page
      </Button>
      <Button type="button" variant="dark" onClick={formPage}>
        Subscribe
      </Button>
    </div>
  );
};

export default TablePage;
