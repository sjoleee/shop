import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((params, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{params.title}</td>
                  <td>{params.stock}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "decrease" });
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "increase" });
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function reduxSetting(state) {
  return {
    state: state,
  };
}

export default connect(reduxSetting)(Cart);
