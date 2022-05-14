import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

const TitleBox = styled.div`
  font-size: 30px;
  padding: 20px;
`;

function Detail(props) {
  let [isStockAlertOpen, setIsStockAlertOpen] = useState(true);
  let [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsStockAlertOpen(false);
    }, 2000);
  }, [isStockAlertOpen]);
  let { id } = useParams();
  let history = useHistory();
  let selectedProduct = props.appearl.find((i) => {
    return i.id == id;
  });

  const [currentStock, setCurrentStock] = useState(selectedProduct.stock);
  let [input, setInput] = useState("");

  return (
    <div className="container">
      <TitleBox className="red">Detail</TitleBox>
      {input}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <Stocks currentStock={currentStock} />
      {isStockAlertOpen === true ? (
        <div className="alert">재고가 얼마 남지 않았습니다.</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={selectedProduct.src} width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectedProduct.title}</h4>
          <p>{selectedProduct.content}</p>
          <p>{selectedProduct.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              alert(`주문이 완료되었습니다. 재고 : ${currentStock - 1}`);
              setCurrentStock(currentStock - 1);
            }}
          >
            주문하기
          </button>
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setSelectedTab(0);
            }}
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setSelectedTab(2);
            }}
          >
            문의사항
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {selectedTab === 0 ? (
        <div>1번</div>
      ) : selectedTab === 1 ? (
        <div>2번</div>
      ) : (
        <div>3번</div>
      )}
    </div>
  );
}

function Stocks(props) {
  console.log(props.appearl);
  return <p>재고가 {props.currentStock}개 남았습니다.</p>;
}

export default Detail;
