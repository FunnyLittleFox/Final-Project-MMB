import React, { Fragment } from "react";

const Supplier = () => {

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Name </th>
        <th>Description</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
    </Fragment>
  );
};

export default Supplier;