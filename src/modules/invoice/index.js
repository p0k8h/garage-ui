import React from "react";

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

    const { name, value } = e.target;

    setSelectedOrderId(value);
    setShowInvoice(false)
  }
  return (
    <div>
      <h1>Invoice:</h1>
      <hr />
      <div>
        <h5>Select a order to generate Invoice</h5>
        <div style={{
          display: "flex"
        }}>

          <select name="orderID" className="select" onChange={handleInputChange} value={selectedOrderId}>
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

  const invoiceOrder = props.orders

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid",
      padding: "20px",
      margin: "20px"
    }}>
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
  );
};

export default Invoice;
