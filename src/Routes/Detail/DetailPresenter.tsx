import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import icon24h from "../../assets/24hicon.png";
import smokingImg from "../../assets/smokingSymbol.png";
import noSmokingImg2 from "../../assets/noSmokingSymbol02.png";
import parkingImg from "../../assets/parkingSymbol.png";
import noParkingImg2 from "../../assets/noParkingSymbol02.png";
// import { Input } from "../../Components/SearchInput";
import { SvgIcon } from "../../Components/ButtonMaker";
import Gallery from "../../Components/ImageCarousel";
import reset from "styled-reset";
import SendButton from "../../Components/ConfirmButton";
import user from "../../assets/profile-placeholder.png";
import chat from "../../assets/chat.png";
import { css } from "glamor";
import ScrollToBottom from "react-scroll-to-bottom";
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
  overflow: hidden;
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

// const KewordGroup = styled.div`
//   padding: 0;
//   margin: 0;
//   display: block;
// `;

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
  overflow: hidden;
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

// const CafeDetail = styled.div`
//   position: relative;
//   border-bottom: 5px solid #efefef;
//   z-index: 3;
//   margin-bottom: -4px;
//   background-color: #fff;
// `;

const PhoneButton = styled.button`
  width: 100%;
  margin-left: 10px;
  /* position: absolute;
  top: 20px;
  right: 21px; */
  padding-left: 12px;
  line-height: 47px;
  padding-left: 12px;
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

const FixContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.075), -1px 1px 1px rgba(0, 0, 0, 0.03), */
  /* 1px 1px 1px rgba(0, 0, 0, 0.03); */
  width: 385px;
  padding: 4px 0;
  position: fixed;
  bottom: 0px;

  background-color: white;
`;
const CommentInputContainer = styled.div`
  position: relative;
  display: block;
  padding-left: 20px;
  padding-top: 0px;
  border-bottom: 1px solid #e2e3e5;
  background-color: #fff;

  overflow: hidden;
  user-select: none;
`;

const CommentInput = styled.input`
  all: unset;
  border: none;
  position: relative;

  display: inline-block;
  left: 36px;
  width: 80%;
  height: 44px;
  font-size: 14px;
  ::placeholder {
    color: ${props => props.theme.colors.lightGrey};
    font-family: "Noto Sans KR thin", sans-serif;
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

const CommentDivider = styled.div`
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #00a6ff;
  /* background-color: ${props => props.theme.colors.main}; */
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 6px;
  width: 4px;
`;

// const User = styled.span`
//   width: 24px;
//   height: 24px;
//   background-image: url(${user});
//   background-position: center;
//   background-size: contain;
// `;
const ChatImageStandAlone = styled.div`
  width: 18px;
  height: 18px;
  font-size: 38px;
  position: relative;
  display: inline-block;
  left: 136px;
  left: 36%;
  top: 2px;
  padding: 0;
`;

const ChatImageWrap = styled.div`
  overflow: hidden;
  background-image: url(${chat});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1.2;
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

const CardTitleContainer = styled.div`
  margin: 10px 0;
  padding: 5px 4px 10px;
`;
const CardTitle = styled.h2`
  color: #666;
  display: inline-block;
  text-align: center;
  position: relative;
  left: 38%;
  font-family: "Noto Sans KR regular", sans-serif;
`;

const CommentsContainer = styled.div`
  position: relative;
  display: block;
  padding-left: 20px;
  margin-bottom: 12px;
  width: 320px;
`;

const CommentInfoContainer = styled.div`
  border: none;
  position: relative;
  /* align-items: center; */
  display: inline-block;
  left: 36px;
  /* top: 0px; */
  width: 100%;
  height: 28px;
  font-size: 14px;
`;

const CommentTextContainer = styled.div`
  border: none;
  position: relative;
  /* align-items: center; */
  display: block;
  left: 36px;
  width: 90%;
  height: min-content;
  font-size: 14px;
`;

const CommentText = styled.h4`
  position: relative;
  /* width: 85%; */
  font-size: 13px;
  line-break: auto;
  line-height: 1.4;
  /* line-height: 3px; */
`;
const UserName = styled.h3`
  color: #000;
  font-weight: normal;
  position: relative;
  top: 4px;
  font-family: "Noto Sans KR regular", sans-serif;
  left: 0px;
`;

const CreatedAt = styled.h4`
  color: #999;
  font-weight: normal;
  position: relative;
  top: -7px;
  font-size: 11px;
  font-family: "Noto Sans KR thin", sans-serif;
  left: 45px;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: top;
  width: 85%;
`;

const MarkerContainer = styled.div`
  display: flex;
  margin-left: 115px;
  margin-top: 10px;
`;
const MarkerText = styled.span`
  margin-left: 7px;
  color: #dedeea;
`;

const Chats = styled.div`
  display: absolute;
  overflow: auto;
  scroll-margin: 0px;
  /* scroll-behavior: auto; */
  height: 592px;
  width: 385px;
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
    width: 10px;
    /* border-radius: 10px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: #888; */
    border-radius: 12px;
    background: ${props => props.theme.colors.lightGrey};
    /* width: 5px; */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a6a2a2;
    /* background: #a690e6; */
    /* width: 5px; */
  }
`;
const ROOT_CSS = css({
  height: 592,
  width: 385
});

const Form = styled.form`
  width: 370px;
`;
interface IInfo {
  name: string;
  address: string;
  parkingLot: number;
  smokingRoom: number;
  images: Array<string>;
  telephone: string;
}
interface IChat {
  cafeId: number;
  id: number;
  comment: string;
  image: null | string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: { name: string; email: string };
}
interface IProps {
  userId: number | null;
  comments: Array<IChat> | null;
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
  userId,
  comments,
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
                      size="16px"
                      viewBox="0 0 24 24"
                      linkTo="/"
                      path="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
                    />
                    <PhoneText>{telephone}</PhoneText>
                  </PhoneContainer>
                </PhoneButton>
              </List>
              <MarkerContainer>
                <MarkerText>
                  <img src={icon24h} width="27" height="30" alt="" />
                </MarkerText>
                {smokingRoom === 1 ? (
                  <MarkerText>
                    <img src={smokingImg} width="26" height="29" alt="" />
                  </MarkerText>
                ) : (
                  <MarkerText>
                    <img src={noSmokingImg2} width="28" height="31" alt="" />
                  </MarkerText>
                )}
                {parkingLot === 1 ? (
                  <MarkerText>
                    <img src={parkingImg} width="29" height="31" alt="" />
                  </MarkerText>
                ) : (
                  <MarkerText>
                    <img src={noParkingImg2} width="29" height="31" alt="" />
                  </MarkerText>
                )}
              </MarkerContainer>
            </SearchSelectGroup>
          </>
        </SearchGroupExceptContent>
        <Container>
          <Card>
            <Gallery urls={images} />
          </Card>
          <Card>
            <CardTitleContainer>
              <ChatImageStandAlone>
                <ChatImageWrap />
              </ChatImageStandAlone>
              <CardTitle>실시간 이야기</CardTitle>
            </CardTitleContainer>
            <ScrollToBottom className={ROOT_CSS}>
              {/* <Chats> */}
              {comments &&
                comments.length > 0 &&
                comments.map((comment, i) => (
                  <CommentsContainer key={i}>
                    <CommentContainer>
                      {comment.userId === userId ||
                      comment.userId === null ? null : (
                        <CommentDivider />
                      )}
                      <PropfileImageStandAlone>
                        <PropfileImageWrapCircle></PropfileImageWrapCircle>
                      </PropfileImageStandAlone>

                      <CommentInfoContainer>
                        <UserName>
                          {comment.user ? comment.user.name : "비회원"}
                        </UserName>
                        <CreatedAt>
                          {comment.createdAt.substring(5, 7) +
                            "월 " +
                            comment.createdAt.substring(8, 10) +
                            "일 " +
                            comment.createdAt.substring(11, 16)}
                        </CreatedAt>
                      </CommentInfoContainer>
                    </CommentContainer>
                    <CommentTextContainer>
                      <CommentText>{comment.comment}</CommentText>
                    </CommentTextContainer>
                  </CommentsContainer>
                ))}
              {/* </Chats> */}
            </ScrollToBottom>
            <FixContainer>
              <CommentInputContainer>
                <Form onSubmit={handleCommentSubmit}>
                  <InputContainer>
                    <PropfileImageStandAlone>
                      <PropfileImageWrapCircle></PropfileImageWrapCircle>
                    </PropfileImageStandAlone>

                    <CommentInput
                      type="text"
                      placeholder="실시간 카페 자리상황 이야기하기"
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
                </Form>
              </CommentInputContainer>
            </FixContainer>
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
