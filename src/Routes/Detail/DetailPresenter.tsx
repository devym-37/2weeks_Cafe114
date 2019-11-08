import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { SvgIcon } from "../../Components/ButtonMaker";
import Gallery from "../../Components/ImageCarousel";
import reset from "styled-reset";
import SendButton from "../../Components/ConfirmButton";
import user from "../../assets/profile-placeholder.png";
// import CommentInput from "../../Components/CommentInput";
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

const CommentInputContainer = styled.div`
  position: relative;
  display: block;
  padding: 0 20px;
`;

const CommentInput = styled.input`
  /* ${reset} */
  all: unset;
  border: none;
  position: relative;
  
  display: inline-block;
  left: 36px;
  width:80%;
  height: 44px;
  font-size: 14px;
  ::placeholder{
    color: ${props => props.theme.colors.lightGrey};
    text-align: left;
  }
`;
const ButtonContainer = styled.div`
  display: inline-block;
  width: 50px;
`;
const SmallSendButton = styled(SendButton)`
  width: 50px;
  height: 32px;
  position: relative;
  left: 90px;
  padding-top: 0;
  text-align: top;
  line-height: 1.5;
  font-size: 13px;
`;

const User = styled.span`
  width: 24px;
  height: 24px;
  background-image: url(${user});
  background-position: center;
  background-size: contain;
`;

const PropfileImageStandAlone = styled.div`
  width: 24px;
  height: 24px;
  font-size: 38px;
  position: absolute;
  display: inline-block;
  /* margin-top: 4px; */
  padding: 0;
`;
const PropfileImageWrapCircle = styled.div`
  border-radius: 25px;
  overflow: hidden;
  background-image: url(${user});
  background-position: center;
  background-size: contain;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1.2;
  /* margin-bottom: 10px; */
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
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
  handleCommentInput: any;
  handleCommentSubmit: any;
  activateSendButton: any;
  deactivateSendButton: any;
  error: string;
  loading: boolean;
  newComment: string;
  showSendButton: boolean;
}

const DetailPresenter: React.FC<IProps> = ({
  result,
  handleCommentInput,
  handleCommentSubmit,
  error,
  newComment,
  showSendButton,
  activateSendButton,
  deactivateSendButton,
  loading
}) => {
  const { name, images, address, parkingLot, smokingRoom, telephone } = result;
  // console.log(images);
  return loading ? (
    <Loader />
  ) : (
    result && (
      <>
        <SearchGroupExceptContent>
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
          <Card>
            실시간 채팅
            <div>
              <CommentInputContainer>
                <form onSubmit={handleCommentSubmit}>
                  <InputContainer>
                    <PropfileImageStandAlone>
                      <PropfileImageWrapCircle>
                        <User />
                      </PropfileImageWrapCircle>
                    </PropfileImageStandAlone>

                    <CommentInput
                      type="text"
                      placeholder="실시간 카페 자리상황 공유하기"
                      onFocus={activateSendButton}
                      // onPointerOver={deactivateSendButton}
                      onChange={handleCommentInput}
                      value={newComment}
                    />
                    {showSendButton && (
                      <ButtonContainer>
                        <SmallSendButton
                          width="50px"
                          text={"Send"}
                          onClick={handleCommentSubmit}
                          disabled={newComment.length > 3}
                        ></SmallSendButton>
                      </ButtonContainer>
                    )}
                  </InputContainer>
                </form>
              </CommentInputContainer>
            </div>
          </Card>
          <Helmet>
            <title>카페114 | {result.name ? result.name : "Detail"} </title>
          </Helmet>
        </Container>
      </>
    )
  );
};

export default DetailPresenter;
