import { useEffect, useState } from "react";
import axiosClient from "./../../../api/axios-client";
import moment from "moment";

function UserList() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchUsers(page = 1) {
    try {
      const result = await axiosClient.get(`/api/users?page=${page}`);
      console.log(result.data);

      setUsers(result.data.data);
      setPagination(result.data);
      setCurrentPage(result.data.current_page);
    } catch (err) {
      console.error("Error fetching users:", err.response || err);
    }
  }

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Simple Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-md">
                      <tbody>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Created AT</th>
                          <th>Updated AT</th>
                          <th>Action</th>
                        </tr>

                        {users
                          ? users.map((user) => (
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                  {moment(user.created_at).format(
                                    "DD-MM-YYYY hh:mm A"
                                  )}
                                </td>
                                <td>
                                  {moment(user.updated_at).format(
                                    "DD-MM-YYYY hh:mm A"
                                  )}
                                </td>
                                {/* <td>
                                  <div className="badge badge-success">
                                    Active
                                  </div>
                                </td> */}
                                <td>
                                  <a href="#" className="btn btn-primary">
                                    Detail
                                  </a>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <nav className="d-inline-block">
                    <ul className="pagination mb-0">
                      {/* Previous Button */}
                      <li
                        className={`page-item ${
                          pagination.current_page === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          <i className="fas fa-chevron-left" />
                        </button>
                      </li>

                      {/* Page Numbers */}
                      {[...Array(pagination.last_page).keys()].map((num) => (
                        <li
                          key={num}
                          className={`page-item ${
                            pagination.current_page === num + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(num + 1)}
                          >
                            {num + 1}
                          </button>
                        </li>
                      ))}

                      {/* Next Button */}
                      <li
                        className={`page-item ${
                          pagination.current_page === pagination.last_page
                            ? "disabled"
                            : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          <i className="fas fa-chevron-right" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserList;
