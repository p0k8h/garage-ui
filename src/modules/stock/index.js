import React from "react";
import NoRecord from "../norecord";

import { API_URL } from "../../config";
import { ErrorToaster, SuccessToaster } from "../toaster";
import { isOfficeAssistant, isOwner } from "../../config";
import AddStock from "./addStock";
const URL = `${API_URL}/stocks`;

const Stock = () => {
  const [stocks, setStocks] = React.useState([]);
  const [showAddPage, setShowAddPage] = React.useState(false);

  React.useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setStocks(data);
      });
  }, []);

  function handleDelete(stockID) {
    fetch(`${API_URL}/stocks/${stockID}`, {
      method: "DELETE"
    }).then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    }).then(data => {
      SuccessToaster("Job Deleted successfully");
      window.location.href = "/stocks";
    })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  return (
    <div>
      <h1>
        Stocks list
      </h1>
      <hr />
      { (isOfficeAssistant() || isOwner()) && <button onClick={() => {
        setShowAddPage(true);
      }}
        style={{
          width: "30%"
        }}
      >Add a Order</button>}
      {showAddPage ? <AddStock setShowAddPage={setShowAddPage} /> : <>

        {stocks.length ? <div className="grid-container">
          {stocks.map(stock => (
            <>
              <div className="grid-item">
                <div className="data-cell-name"><div className="data-cell-value">Stock ID:&nbsp; </div>{stock.id}</div>
                <div className="data-cell-name"><div className="data-cell-value">Stock Item ID:&nbsp; </div>{stock.itemID}</div>
                <div className="data-cell-name"><div className="data-cell-value">Stock Name: &nbsp;</div>{stock.name}</div>
                <div className="data-cell-name"><div className="data-cell-value">Total Items: &nbsp;</div>{stock.totalItems}</div>
                <div>
                  {(isOfficeAssistant() || isOwner()) && <button style={{
                    backgroundColor: "#a96f6f",
                    color: "black",
                    fontWeight: "bold"
                  }} onClick={() => {
                    handleDelete(stock.id);
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

export default Stock;
