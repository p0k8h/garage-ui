import React from "react";
import { API_URL } from "../../config";
import NoRecord from "../norecord";
import AddOrder from "./AddOrder";
import { SuccessToaster, ErrorToaster } from "../toaster"
import { isOfficeAssistant, isMechanic, isOwner } from "../../config";

const URL = `${API_URL}/orders`;

const Order = () => {
  const [orders, setOrders] = React.useState([]);
  const [showAddPage, setShowAddPage] = React.useState(false);

  React.useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      });
  }, []);

  function handleDelete(orderID) {
    fetch(`${API_URL}/orders/${orderID}`, {
      method: "DELETE"
    })
      .then(async response => {
        if (response.status === 400) {
          const a = await response.json();
          throw a;
        } else {
          return response.json();
        }
      })
      .then(data => {
        SuccessToaster("Order Deleted successfully.");
        window.location.href = "/orders"
      })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;

        ErrorToaster(String(m))
      })
  }

  return (
    <div>
      <h1>
        Order list
      </h1>
      <hr />
      {(isOfficeAssistant() || isOwner()) && <button onClick={() => {
        setShowAddPage(true);
      }}
        style={{
          width: "30%"
        }}
      >Add a Order</button>}
      {showAddPage ? <>
        <AddOrder setShowAddPage={setShowAddPage} />
      </> : <>
        {orders.length ? <div className="grid-container">
          {orders.map(order => (
            <>
              <div className="grid-item">
                <div className="data-cell-name"><div className="data-cell-value">Order ID:&nbsp; </div>{order.id}</div>
                <div className="data-cell-name"><div className="data-cell-value">Order Amount:&nbsp; </div>{order.amount}</div>
                <div className="data-cell-name"><div className="data-cell-value">Part Name: &nbsp;</div>{order.partName}</div>
                <div className="data-cell-name"><div className="data-cell-value">Model Number: &nbsp;</div>{order.modelNumber}</div>
                <div className="data-cell-name"><div className="data-cell-value">Size: &nbsp;</div>{order.size}</div>
                <div className="data-cell-name"><div className="data-cell-value">Quantity: &nbsp;</div>{order.quantity}</div>
                <div>

                  {(isOfficeAssistant() || isOwner()) &&<button style={{
                    backgroundColor: "#a96f6f",
                    color: "black",
                    fontWeight: "bold"
                  }} onClick={() => {
                    handleDelete(order.id)
                  }}>Delete</button>}
                </div>
              </div>

            </>
          ))}
        </div> : <NoRecord />
        }
      </>}

    </div>
  );
};

export default Order;
