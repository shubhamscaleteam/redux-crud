import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-router-dom ...!!
import { useNavigate, useParams } from "react-router-dom";
import { addInformation, editInformation } from "../redux/action/action";

const FormPage = () => {
  const [information, setInformation] = useState({
    id: "",
    fname: "",
    lname: "",
    gender: "",
    hobbies: [],
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();

  const { allInformation } = useSelector((state) => state);

  //edit..!

  const editId = params.id;

  useEffect(() => {
    if (editId !== undefined) {
      const findUser = allInformation.find((elm) => elm.id === +editId);

        setInformation({
          id: editId,
          fname: findUser.fname,
          lname: findUser.lname,
          gender: findUser.gender,
          hobbies: findUser.hobbies,
          email: findUser.email,
        });
     
    }
  }, [editId]);

  // edit..!

  const getAllInformation = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  // const checkboxhHandler = (e) => {
  //   // console.log(information);
  //   if (e.checked === true) {
  //     setInformation({ hobbies: [...information.hobbies, e.value] });
  //   } else {
  //     let unchecked =  information.hobbies.filter((elm) => elm !== e.value);

  //     setInformation({hobbies : unchecked})
  //   }
  //   console.log(information.hobbies);
  // };

  const submitInformation = (e) => {
    e.preventDefault();

    if (editId !== undefined) {
      dispatch(editInformation(information));
    } else {
      dispatch(addInformation(information));
    }
    navigate("/table");
  };

  return (
    <div>
      <h1>Inforamation Form</h1>

      <Form className=" mt-5 mb-5" onSubmit={submitInformation}>
        <Form.Group className="mb-3" controlId="formBasicFname">
          <Form.Label className="fw-bold">First Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            placeholder="Enter First Name"
            onChange={getAllInformation}
            value={information.fname}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLname">
          <Form.Label className="fw-bold">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            placeholder="Enter Last Name"
            onChange={getAllInformation}
            value={information.lname}
          />
        </Form.Group>

        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Label className="fw-bold">Gender </Form.Label> &nbsp;
            <Form.Check
              inline
              label="Male"
              name="gender"
              value="male"
              type={type}
              id={`inline-${type}-1`}
              onChange={getAllInformation}
              checked={
                information.gender !== "" && information.gender === "male"
                  ? true
                  : false
              }
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              value="female"
              type={type}
              id={`inline-${type}-2`}
              onChange={getAllInformation}
              checked={
                information.gender !== "" && information.gender === "female"
                  ? true
                  : false
              }
            />
          </div>
        ))}

        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Label className="fw-bold">Hobbies </Form.Label> &nbsp;
            <Form.Check
              inline
              label="Playing Cricket"
              name="hobbies"
              value="Playing_cricket"
              type={type}
              id={`inline-${type}-1`}
              // onChange={(e) => checkboxhHandler(e.target)}
            />
            <Form.Check
              inline
              label="Listen Music"
              name="hobbies"
              value="Listen_Music"
              type={type}
              id={`inline-${type}-2`}
              // onChange={(e) => checkboxhHandler(e.target)}
            />
            <Form.Check
              inline
              label="Coding"
              name="hobbies"
              value="Coding"
              type={type}
              id={`inline-${type}-3`}
              // onChange={(e) => checkboxhHandler(e.target)}
            />
          </div>
        ))}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={getAllInformation}
            value={information.email}
          />
          <Form.Text className="text-muted fw-bold">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {editId === undefined && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={getAllInformation}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormPage;
