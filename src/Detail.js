import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

const TitleBox = styled.div`
  font-size: 30px;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let selectedProduct = props.appearl.find((i) => {
    return i.id == id;
  });

  return (
    <div className="container">
      <TitleBox className="red">Detail</TitleBox>
      <div className="alert">재고가 얼마 남지 않았습니다.</div>
      <div className="row">
        <div className="col-md-6">
          <img src={selectedProduct.src} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price}</p>
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
