
import React, { Component } from 'react';
import Styled from 'styled-components';

const InsideImage = Styled.div`
  height: 549px;
  width: 549px;
  img {
    cursor: zoom-in;
  }
`;

const ImageInSlide = (props) => (
  <InsideImage className="carousel-item">
    <img className="d-block w-100" src={props.imageUrl.url} onClick={() => props.onBigImageClick()} alt="" />
  </InsideImage>
)

export default ImageInSlide;