import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  const AddEvent = e => {
    const { name, value } = e.target;

    setData(val => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const submit = e => {
    e.preventDefault();
    alert(`
    ${data.fullName}
    ${data.phoneNumber}
    ${data.email}
    ${data.address}
    ${data.message}
    `);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={data.fullName}
                  onChange={AddEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Phone Number"
                  onChange={AddEvent}
                  value={data.phoneNumber}
                  name="phoneNumber"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Enter Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Email"
                  onChange={AddEvent}
                  value={data.email}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=" Enter Your Address"
                  onChange={AddEvent}
                  value={data.address}
                  name="address"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  value={data.message}
                  onChange={AddEvent}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={submit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
