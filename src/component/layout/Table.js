import React from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const DashItem = () => {
  return (
    <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4 dashTop">
      <div >
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
        </div>
      </div>
      <Table responsive hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name of Items</th>
            <th>Opening stock</th>
            <th>Daily Production</th>
            <th>Closing stock</th>
            <th>Price</th>
            <th>Your Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>11/06/2020</td>
            <td>Diphynyl DT</td>
            <td>210</td>
            <td>20</td>
            <td>230</td>
            <td>#40,000</td>
            <td>John</td>
            <td>
              <Button color="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{" "}
              <Button color="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>13/06/2020</td>
            <td>Tryphynyl DT</td>
            <td>230</td>
            <td>30</td>
            <td>260</td>
            <td>#70,000</td>
            <td>Tayo</td>
            <td>
              <Button color="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{" "}
              <Button color="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>14/06/2020</td>
            <td>Pephynyl DT</td>
            <td>260</td>
            <td>10</td>
            <td>270</td>
            <td>#20,000</td>
            <td>John</td>
            <td>
              <Button color="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{" "}
              <Button color="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashItem;