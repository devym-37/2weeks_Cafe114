import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

interface IProps {
  urls: Array<string>;
}
interface IContainer {
  url: string;
}
const ImageContainer = styled.div<IContainer>`
  width: 230px;
  height: 153px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default class Resizable extends Component<IProps> {
  state = {
    display: true,
    width: 700
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const { urls } = this.props;

    return (
      <div>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            {urls.map(url => (
              <ImageContainer url={url} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
