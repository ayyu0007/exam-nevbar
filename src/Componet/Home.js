import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Home() {
  const [data, setdata] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  console.log(data, "data");

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const deleteItem = (id) => {
    const upData = data.filter((item) => item.id !== id);
    setdata(upData);
  };
  return (
    <div className="row bg-light-subtle">
      {data.map((e, ind) => {
        return (
          <div key={ind} className="col-3">
            <div className="card my-3" style={{ width: "18rem" }} key={e.id}>
              <div className="card-body">
                <h5 className="card-title">{e.id}</h5>
                <p className="card-text">{e.title}</p>
                <div>
                  <Link
                    type="button"
                    className="btn btn-success"
                    to={`/${e.id}`}                    
                  >
                    View 
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      openModal(e);
                      deleteItem(e.id);
                    }}
                  >
                    Delete
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          {selectedItem && (
                            <div>
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                ID: {selectedItem.id}
                              </h1>
                            </div>
                          )}

                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                          />
                        </div>
                        <div className="modal-body">
                          {selectedItem && (
                            <div>
                              <p>Title: {selectedItem.title}</p>
                            </div>
                          )}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;