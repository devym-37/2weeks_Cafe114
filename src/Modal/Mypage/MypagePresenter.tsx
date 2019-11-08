import React from "react";
import styled from "styled-components";
import setting from "../../assets/setting.png";
import TextButton from "../../Components/TextButton";
import SubTextButton from "../../Components/SubTextButton";
import user from "../../assets/profile-placeholder.png";
import CloseButton from "../../Components/CloseButton";

const AWrap = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  overflow: hidden;
  min-width: 750px;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

const Navigation = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
`;

const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  transition: -webkit-transform 0.3s ease-out 0s;
  will-change: transform;
  overflow-y: auto;
  right: 0px;
  transform: translateX(0%);
  box-shadow: rgba(0, 0, 0, 0.15) -2px 2px 4px;
  background-color: #fff;
  width: 375px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  display: block;
`;

const ExceptContent = styled.fieldset`
  margin: -5px;
  padding: 0;
  display: block;
`;
const InnerHeader = styled.div`
  background-color: ${props => props.theme.colors.main};
  margin: 0;
  padding: 0;
  display: block;
  font-size: 14px;
`;

const SettingButton = styled.a`
  display: inline-block;
  float: right;
  color: #fff;
  font-size: 14px;
  position: absolute;
  z-index: 5;
  left: 20px;
  top: 13px;
  text-decoration: none;
  cursor: pointer;
`;

const SettingIcon = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 20px;
  height: 20px;
  background-image: url(${setting});
  background-position: center;
  background-size: contain;
  line-height: 999em;
  vertical-align: top;
`;

const User = styled.span`
  width: 50px;
  height: 50px;
  background-image: url(${user});
  background-position: center;
  background-size: contain;
`;

const Title = styled.h4`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
  margin: 0;
  padding: 0;
  display: block;

  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const TitleLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
`;

const CloseBtn = styled(CloseButton)`
  display: inline-block;
  float: right;
  color: #fff;
  font-size: 14px;
  position: absolute;
  z-index: 5;
  right: 0px;
  top: -4px;
  text-decoration: none;
  cursor: pointer;
`;
const PropfileContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.main};
  height: 100px;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
const Container = styled.div`
  padding: 10px 20px;
`;

const PropfileSubContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.main};
  height: 50px;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
const SubContainer = styled.div`
  margin-top: 10px;
  padding-top: 20px;
  padding-left: 20px;
`;

const PropfileImageStandAlone = styled.div`
  width: 50px;
  height: 50px;
  font-size: 38px;
  position: relative;
  margin: 0;
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

const Propfile = styled.div``;

const NameWrap = styled.div`
  position: absolute;
  left: 87px;
  top: 14px;
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
const UserName = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 1.2;
  font-size: 20px;
  max-width: 215px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  letter-spacing: 0;
  text-indent: 0;
  color: #fff;
`;

const Sir = styled.span`
  font-size: 13px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  letter-spacing: 0;
  text-indent: 0;
  color: #fff;
`;

const SubText = styled.span`
  padding-left: 22px;
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  letter-spacing: 0;
  text-indent: 0;
  color: #fff;
`;

const UserEmail = styled.span`
  display: block;
  font-weight: thin;
  font-size: 12px;
  color: #fff;
  line-height: 1.8;
  text-indent: 0;
  letter-spacing: 0;
`;

const ThinTextButton = styled(TextButton)`
  position: absolute;
  right: 22px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  top: 40px;
  cursor: pointer;
`;

const SubButton = styled(SubTextButton)`
  padding-left: 22px;
  font-size: 16px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  letter-spacing: 0;
  text-indent: 0;
  color: #fff;
  cursor: pointer;
`;

interface IProps {
  toggleMypageSlider: any;
  handleLogout: any;
  handleLikeCafe: any;
  userName: string;
  userEmail: string;
}
const MypagePresenter: React.SFC<IProps> = ({
  toggleMypageSlider,
  handleLogout,
  handleLikeCafe,
  userName,
  userEmail
}) => (
  <AWrap>
    <Navigation role="navigation">
      <Sidebar>
        <div>
          <ExceptContent>
            <InnerHeader>
              {/* <SettingButton>
                <SettingIcon />
              </SettingButton> */}
              <Title>
                <TitleLink href="#">내 메뉴</TitleLink>
              </Title>

              <CloseBtn onClick={toggleMypageSlider} color="#ffffff" />
            </InnerHeader>
            <PropfileContainer>
              <Container>
                <div>
                  <div>
                    <PropfileImageStandAlone>
                      <PropfileImageWrapCircle>
                        <User />
                      </PropfileImageWrapCircle>
                    </PropfileImageStandAlone>
                  </div>
                </div>
                <NameWrap>
                  <UserName>
                    {userName} <Sir> 님</Sir>
                  </UserName>
                  <UserEmail> {userEmail}</UserEmail>
                </NameWrap>
                <ThinTextButton
                  text={"로그아웃"}
                  href="/"
                  onClick={handleLogout}
                  color="#fff"
                />
              </Container>
              <PropfileSubContainer>
                <SubContainer>
                  <SubButton
                    text={"알림받는 내카페"}
                    href="#"
                    onClick={handleLikeCafe}
                    color="#fff"
                  />
                </SubContainer>
              </PropfileSubContainer>
            </PropfileContainer>
          </ExceptContent>
        </div>
      </Sidebar>
    </Navigation>
  </AWrap>
);

export default MypagePresenter;
