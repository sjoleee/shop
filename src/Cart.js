import React from "react";
import { Table, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import "./Cart.css";

function Cart(props) {
  return (
    <div>
      <div>
        <Table className="table" responsive="sm">
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
      <div className="alert-wrapper">
        {props.isDiscountOpen === true ? (
          <div className="discount-alert">
            <p>지금 구매하시면 맥북을 드립니다.</p>
            <button
              onClick={() => {
                props.dispatch({ type: "close" });
              }}
            >
              닫기
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function reduxSetting(state) {
  return {
    state: state.reducer,
    isDiscountOpen: state.reducer2,
  };
}

export default connect(reduxSetting)(Cart);
