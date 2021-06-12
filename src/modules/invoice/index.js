import React from "react";
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

import { API_URL } from "../../config";


const Invoice = () => {
  const [orders, setOrders] = React.useState([]);
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [selectedOrderId, setSelectedOrderId] = React.useState();

  React.useEffect(() => {
    fetch(`${API_URL}/orders`)
      .then(response => response.json())
      .then(data => {
        const [order] = data;
        setSelectedOrderId(order?.id);
        setOrders(data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleInputChange(e) {

    const { value } = e.target;

    setSelectedOrderId(value);
    setShowInvoice(false);
  }
  return (
    <div>
      <h1>Invoice:</h1>
      <br />
      <br />
      <div>
        <h3 style={{
          textDecoration: "underline"
        }}>Select a order to generate Invoice</h3>
        <br />
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>

          <select name="orderID" className="select" style={{
            width: "auto"
          }} onChange={handleInputChange} value={selectedOrderId}>
            <option disabled>Select a Order</option>
            {!!orders.length && orders.map(order => (
              <option className="select" value={order.id}>{`${order.id} - ${order.partName} - ${order.amount}`}</option>
            ))}
          </select>

          {selectedOrderId && <button style={{
            width: "fit-content",
            marginLeft: "100px"
          }}
            onClick={() => setShowInvoice(true)}
          >Generate Invoice</button>}
        </div>
        <hr />
        {showInvoice && (
          <div>
            <Bill orders={orders.find(order => order.id === +selectedOrderId)} />
          </div>
        )}

      </div>
    </div>
  );
};

const Bill = (props) => {

  const invoiceOrder = props.orders;

  const onButtonClick = () => {
    let domElement = document.getElementById('my-node');
    htmlToImage.toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF("p", "pt", "a4");
        pdf.addImage(dataUrl, 'PNG', 20, 20, 500, 100);
        pdf.save("download.pdf");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid",
        padding: "20px",
        margin: "20px",
        color: "black",
        width: "50%"
      }} id="my-node">
        <div>
          <span>Date: </span>{new Date().toISOString().slice(0, 10)}
        </div>
        <br />
        <br />
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div>Order Id:</div>
          <div>{invoiceOrder.id}</div>

        </div>
        <hr />
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Employee Id: </div>
          <div>

            {invoiceOrder.employeeID}
          </div>
        </div>
        <hr />

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Part Name:</div>
          <div>

            {invoiceOrder.partName}
          </div>
        </div>
        <hr />

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Model Number:</div>
          <div>

            {invoiceOrder.modelNumber}
          </div>
        </div>
        <hr />

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Size: </div>
          <div>

            {invoiceOrder.size}
          </div>
        </div>
        <hr />

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Quantity:</div>
          <div>

            {invoiceOrder.quantity}
          </div>
        </div>
        <hr />

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}><div>Total Amount:</div> <div></div>
          <div>

            $ {invoiceOrder.amount}
          </div>
        </div>
        <hr />
      </div>


      </div>
      <button style={{
        width: "auto"
      }} onClick={onButtonClick}>Download PDF</button>

    </>
  );
};

export default Invoice;
