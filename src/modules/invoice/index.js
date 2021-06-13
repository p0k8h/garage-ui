import React from "react";
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

import { API_URL } from "../../config";


const Invoice = () => {
  const [jobs, setJobs] = React.useState([]);
  const [showInvoice, setShowInvoice] = React.useState(false);
  const [selectedJobId, setSelectedJobId] = React.useState();

  React.useEffect(() => {
    fetch(`${API_URL}/jobs`)
      .then(response => response.json())
      .then(data => {
        const [order] = data;
        setSelectedJobId(order?.id);
        setJobs(data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleInputChange(e) {

    const { value } = e.target;

    setSelectedJobId(value);
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
        }}>Select a job to generate Invoice</h3>
        <br />
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>

          <select name="orderID" className="select" style={{
            width: "auto"
          }} onChange={handleInputChange} value={selectedJobId}>
            <option disabled>Select a Job</option>
            {!!jobs.length ? jobs.map((order, index) => (
              <option className="select" value={order.id}>{`${index + 1}. ${order.name} - $ ${order.amount}`}</option>
            )) : <div>
              No Jobs found

                <div>Please add a Job </div>
            </div>}
          </select>

          {selectedJobId && <button style={{
            width: "fit-content",
            marginLeft: "100px"
          }}
            onClick={() => setShowInvoice(true)}
          >Generate Invoice</button>}
        </div>
        <hr />
        {showInvoice && (
          <div>
            <Bill jobs={jobs.find(order => order.id === +selectedJobId)} />
          </div>
        )}

      </div>
    </div>
  );
};

const Bill = (props) => {

  const invoiceOrder = props.jobs;

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
        marginBottom: "10%"
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
            <div>Job Id:</div>
            <div>{invoiceOrder.id}</div>

          </div>
          <hr />

          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}><div>Job Name:</div>
            <div>

              {invoiceOrder.name}
            </div>
          </div>

          <hr />

          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}><div>Customer Name:</div>
            <div>

              {`${invoiceOrder.firstName} ${invoiceOrder.lastName}`}
            </div>
          </div>
          <hr />

          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}><div>Hours:</div>
            <div>

              {invoiceOrder.hours}
            </div>
          </div>
          <hr />

          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}><div>Is Completed: </div>
            <div>

              {invoiceOrder.isCompleted ? "YES" : "NO"}
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
