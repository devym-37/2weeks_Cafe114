import React from "react";
import styled from "styled-components";
const Link = styled.a`
  vertical-align: top;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  width: 12px;
  height: 46px;
`;
const BoxLink = styled.a`
  vertical-align: top;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: white;
  width: 41px;
  height: 41px;
  /* border-top-color: rgba(0, 0, 0, 0.1);
  border-top-style: solid;
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-style: solid;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-left-style: solid; */
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  white-space: nowrap;
  text-align: center;
  border-radius: 3px;
  line-height: 37px;
  font-size: 13px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 40px;
  display: flex;
  margin: 6px;
  /* position: relative; */
  top: 0px;
  /* width: 100%;
  height: 100%; */
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.svg`
  flex: none;
  fill: rgb(20%, 20%, 20%);
  transition: fill 0.25s;
  width: 20px;
  height: 20px;
  ${BoxLink}:hover & {
    fill: ${props => props.theme.colors.main};
  }
  cursor: pointer;
`;

const CustomColorIcon = styled.svg`
  flex: none;
  fill: ${props => props.fill};
  transition: fill 0.25s;
  ${Link}:hover & {
    fill: rgba(255, 255, 255, 0.6);
  }
`;
const Text = styled.span`
  flex: none;
  color: #666666;
  font-size: 14px;
  font-weight: 800;
  ${BoxLink}:hover & {
    color: ${props => props.theme.colors.main};
  }
`;
interface IconButtonProps {
  linkTo?: string;
  viewBox: string;
  className?: string;
  path: string;
  fill?: string;
  size?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const SvgIcon: React.SFC<IconButtonProps> = ({
  linkTo,
  path,
  viewBox,
  className,
  fill,
  size,
  onClick
}) => (
  <span className={className}>
    <Link href={linkTo}>
      <CustomColorIcon
        fill={fill}
        width={size}
        height={size}
        viewBox={viewBox}
        onClick={onClick}
      >
        <path d={path} />
      </CustomColorIcon>
    </Link>
  </span>
);

export const IconButton: React.SFC<IconButtonProps> = ({
  linkTo,
  path,
  viewBox,
  className,
  onClick
}) => (
  <Container className={className}>
    <BoxLink href={linkTo} onClick={onClick}>
      <Icon viewBox={viewBox}>
        <path d={path} />
      </Icon>
    </BoxLink>
  </Container>
);

const ImageStandAlone = styled.div`
  width: 20px;
  height: 20px;
  font-size: 38px;
  position: relative;
  display: inline-block;
  left: 37%;
  top: 2px;
  padding: 0;
`;

const ImageWrap = styled.div<{ url: string }>`
  overflow: hidden;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1.2;
`;

interface PngButtonProps {
  linkTo?: string;
  className?: string;
  size?: string;
  url: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const PngButton: React.SFC<PngButtonProps> = ({
  linkTo,
  className,
  url,
  onClick
}) => (
  <Container className={className}>
    <BoxLink href={linkTo} onClick={onClick}>
      <ImageStandAlone>
        <ImageWrap url={url} />{" "}
      </ImageStandAlone>
    </BoxLink>
  </Container>
);

interface TextButtonProps {
  linkTo?: string;
  text: string;
  className?: string;
  onClick: any;
}

export const TextButton: React.SFC<TextButtonProps> = ({
  linkTo,
  onClick,
  className,
  text
}) => (
  <Container className={className}>
    <BoxLink onClick={onClick}>
      <Text>{text}</Text>
    </BoxLink>
  </Container>
);
