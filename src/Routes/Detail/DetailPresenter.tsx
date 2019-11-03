import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { Input } from "../../Components/SearchInput";
import { SvgIcon } from "../../Components/ButtonMaker";
import Map from "../../Components/Map";
import Gallery from "../../Components/ImageCarousel";

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  width: 385px;
  top: 0;
  bottom: 0;
  margin-top: 190px;
  overflow: auto;
  overflow-x: hidden;
  background-color: #eaebed;
  z-index: 2;
`;
const SearchGroupExceptContent = styled.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 190px;
  background-color: ${props => props.theme.colors.main};
  padding-top: 12px;
  z-index: 2;
`;
const Legend = styled.legend`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  font-size: 0;
  line-height: 0;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  display: block;
  padding-inline-start: 2px;
  padding-inline-end: 2px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const KewordGroup = styled.div`
  padding: 0;
  margin: 0;
  display: block;
`;

const HeaderInfo = styled.div`
  position: relative;
  top: 56px;
  height: 120px;
  border-bottom: 1px solid #565eb6;
  padding: 0 21px 0 20px;
  text-align: center;
`;

const CafeTitle = styled.h1`
  display: block;
  width: 344px;
  margin: 0 auto;
  padding-top: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 300;
  text-align: center;
  /* position: relative;
  height: 81px;
  border-bottom: 1px solid #565eb6;
  
  padding: 0; */
`;

const TitleLink = styled.a`
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 300;
  text-align: center;
`;

const Address = styled.h2`
  margin-top: 10px;
  display: block;
  font-size: 12px;
  font-weight: 200;
  color: #dedeea;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* margin-bottom: 40px; */
  padding: 0;
  text-align: center;
`;

const BackContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0;
  padding-left: 20px;
  padding-top: 12px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

const CloseContainer = styled.div`
  position: absolute;
  left: 328px;
  top: 0;
  padding-left: 20px;
  padding-top: 12px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

const SearchSelectGroup = styled.ul`
  position: relative;
  display: table;
  width: 100%;
  list-style: none;
  margin-top: 4px;
  padding: 0;
`;

const Card = styled.div`
  border-bottom: 1px solid #e2e3e5;
  background-color: #fff;
  padding: 0;
  user-select: none;
`;

const List = styled.li`
  width: 25%;
  /* border-right: 1px solid #565eb6; */
  display: table-cell;
  vertical-align: top;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CafeDetail = styled.div`
  position: relative;
  border-bottom: 5px solid #efefef;
  z-index: 3;
  margin-bottom: -4px;
  background-color: #fff;
`;

const PhoneButton = styled.button`
  width: 100%;
  /* position: absolute;
  top: 20px;
  right: 21px; */
  line-height: 47px;
  padding-right: 29px;
  padding-left: 64px;
  text-align: left;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  -webkit-appearance: button;
  border-radius: 0;
  overflow: visible;
  border: 0 none;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  text-transform: none;
  text-indent: 0px;
  text-rendering: auto;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  /* text-align: center; */
  display: inline-block;
  box-sizing: border-box;
`;

const PhoneContainer = styled.div`
  display: flex;
`;
const PhoneText = styled.h2`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 200;
  color: #dedeea;
`;

interface IInfo {
  name: string;
  address: string;
  parkingLot: number;
  smokingRoom: number;
  images: Array<string>;
  telephone: string;
}
interface IProps {
  result: IInfo;
  term: string;
  error: string;
  loading: boolean;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DetailPresenter: React.FC<IProps> = ({
  result,
  term,
  error,
  updateTerm,
  loading
}) => {
  const { name, images, address, parkingLot, smokingRoom, telephone } = result;
  console.log(images);
  return loading ? (
    <Loader />
  ) : (
    result && (
      <>
        <SearchGroupExceptContent>
          <Legend>검색</Legend>
          <KewordGroup>
            <Input value={term} onChange={updateTerm} />
          </KewordGroup>
          <HeaderInfo>
            <CafeTitle>
              <TitleLink href="#">{name}</TitleLink>
            </CafeTitle>
            <Address>{address}</Address>
            <BackContainer>
              <SvgIcon
                fill="#ffffff"
                viewBox="0 0 24 24"
                linkTo="/"
                size="20px"
                path="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
              />
            </BackContainer>
            <CloseContainer>
              <SvgIcon
                fill="#ffffff"
                size="16px"
                viewBox="0 0 24 24"
                linkTo="/"
                path="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
              />
            </CloseContainer>
          </HeaderInfo>
          <>
            <SearchSelectGroup>
              <List>
                <PhoneButton>
                  <PhoneContainer>
                    <SvgIcon
                      fill="#ffffff"
                      size="14px"
                      viewBox="0 0 24 24"
                      linkTo="/"
                      path="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
                    />
                    <PhoneText>{telephone}</PhoneText>
                  </PhoneContainer>
                </PhoneButton>
              </List>
              <List></List>
            </SearchSelectGroup>
          </>
        </SearchGroupExceptContent>

        <Container>
          <Card>
            <Gallery urls={images} />
          </Card>
          {/* <Card>{parkingLot === 0 ? "주차불가" : "주차가능"}</Card>
          <Card>{smokingRoom === 0 ? "흡연불가" : "흡연가능"}</Card> */}
          <Helmet>
            <title>카페114 | {result.name ? result.name : "Detail"} </title>
          </Helmet>
        </Container>
        {/* <Map /> */}
      </>
    )
  );
};

export default DetailPresenter;
