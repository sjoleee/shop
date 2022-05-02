import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  console.log(props.appearl);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.appearl[id].src} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.appearl[id].title}</h4>
          <p>{props.appearl[id].content}</p>
          <p>{props.appearl[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
