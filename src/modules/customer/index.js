import React from "react";
import Modal from 'react-modal';

import "./index.css";
import { API_URL } from "../../config";
import NoRecord from "../norecord";
import AddCustomer from "./addCustomer";
import { withRouter } from "react-router";
import { SuccessToaster, ErrorToaster } from "../toaster";
import { isOfficeAssistant, isMechanic, isOwner } from "../../config";

const URL = `${API_URL}/customers`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto'
  }
};

const Customer = () => {
  var subtitle;
  const [customers, setCustomers] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [showAddPage, setShowAddPage] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setModalData({
      ...modalData,
      [name]: value
    });

  }

  React.useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
      });
  }, []);

  function handleSubmit() {
    fetch(`${URL}/${modalData.id}`, {
      method: "PUT",
      body: JSON.stringify(modalData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    }).then(data => {
      SuccessToaster("Customer updated successfully.");
      window.location.href = "/customers";
    })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;

        ErrorToaster(String(m));
      });
  }

  function handleDelete(customerID) {
    fetch(`${URL}/${customerID}`, {
      method: "DELETE"
    }).then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    }).then(data => {
      SuccessToaster("Customer Deleted successfully");
      window.location.href = "/customers";
    })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  return (
    <div>
      <h1>Customers:</h1>
      <hr />
      {(isOfficeAssistant() || isOwner()) && <button onClick={() => {
        setShowAddPage(true);
      }}
        style={{
          width: "30%"
        }}
      >Add a Customer</button>}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Update details for {modalData.firstName + " " + modalData.lastName}</h2>
        <div className="container">
          <label for="firstName"><b>First Name</b></label>
          <input type="text" placeholder="Enter FirstName" name="firstName" required value={modalData.firstName} onChange={handleInputChange} />
          <label for="lastName"><b>Last Name</b></label>
          <input type="text" placeholder="Enter LastName" name="lastName" required value={modalData.lastName} onChange={handleInputChange} />
          <label for="phone"><b>Phone Number</b></label>
          <input type="text" placeholder="Enter phone number" name="phone" required value={modalData.phone} onChange={handleInputChange} />
          <label for="address"><b>Address</b></label>
          <input type="text" placeholder="Address" name="address" required value={modalData.address} onChange={handleInputChange} />
        </div>
        <div>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={() => {
            handleSubmit();
          }} >Save</button>
        </div>
      </Modal>
      {
        showAddPage ? <>
          <AddCustomer setShowAddPage={setShowAddPage} />
        </> : <>
          {customers.length ? <div className="grid-container">
            {customers.map(customer => (
              <>
                <div className="grid-item">
                  <div className="data-cell-name"><div className="data-cell-value">First Name:&nbsp; </div>{customer.firstName}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Last Name: &nbsp;</div>{customer.lastName}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Email: &nbsp;</div>{customer.email}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Phone:&nbsp; </div>{customer.phone}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Address:&nbsp; </div>{customer.address}</div>
                  {(isOfficeAssistant() || isOwner()) && <div>
                    <button style={{
                      backgroundColor: "#649866",
                      color: "black",
                      fontWeight: "bold"
                    }} onClick={() => {
                      setModalData(customer);
                      openModal();
                    }}>Edit</button>
                    <button style={{
                      backgroundColor: "#a96f6f",
                      color: "black",
                      fontWeight: "bold"
                    }} onClick={() => {
                      handleDelete(customer.id);
                    }}>Delete</button>
                  </div>}
                </div>
              </>
            ))}
          </div> : <NoRecord />
          }
        </>
      }
    </div>
  );
};

export default withRouter(Customer);
