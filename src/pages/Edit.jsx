// EditContact.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getConatct, updateContacts } from "../redux/action";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const datas = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updatedContact, setUpdatedContact] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
  });

  const data = datas.find((ele) => ele._id === id);

  useEffect(() => {
    const newData = {
      fName: data.fName,
      lName: data.lName,
      phone: data.phone,
      email: data.email,
    };
    setUpdatedContact(newData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(updatedContact);
    dispatch(updateContacts(id, updatedContact));
    toast.success("updated the contact succesfully");
    setTimeout(() => {
      navigate("/mobile");
    }, 4000);
  };

  useEffect(() => {
    if (datas.length === 0) {
      dispatch(getConatct());
    }
  }, [dispatch, datas]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="fName"
            name="fName"
            value={updatedContact.fName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lName"
            name="lName"
            value={updatedContact.lName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={updatedContact.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedContact.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
