import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await axios.get(`http://localhost:3003/users`);
    // console.log(response.data);
    setUsers(response.data);
  };
  //   console.log(users);

  useEffect(() => {
    loadUsers();
  }, []);

  //   delete user
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
      <section id="crud">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th> Email</th>
                <th>User Name</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const { id, name, email, username, website } = user;
                return (
                  <>
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{username}</td>
                      <td>{website}</td>
                      <Link
                        to={`/user/view/${id}`}
                        className="btn btn-primary bg-primary"
                      >
                        View
                      </Link>
                      <Link
                        to={`/user/edit/${id}`}
                        className="btn btn-warning mx-2 bg-warning"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger bg-danger"
                        onClick={() => deleteUser(id)}
                      >
                        Delete
                      </button>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default Home;
