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
  width: 36px;
  height: 36px;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-style: solid;
  border-top-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.2);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-left-style: solid;
  border-left-width: 1px;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin-top: 10px;
  margin-left: 2px;
  padding: 0 5px;
  white-space: nowrap;
  text-align: center;
  border-radius: 3px;
  line-height: 37px;
  font-size: 13px;
`;

const Container = styled.div`
  width: 100px;
  display: flex;
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
  ${Link}:hover & {
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

interface TextButtonProps {
  linkTo: string;
  text: string;
  className?: string;
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
  className
}) => (
  <Container className={className}>
    <BoxLink href={linkTo}>
      <Icon viewBox={viewBox}>
        <path d={path} />
      </Icon>
    </BoxLink>
  </Container>
);

export const TextButton: React.SFC<TextButtonProps> = ({
  linkTo,
  className,
  text
}) => (
  <Container className={className}>
    <BoxLink href={linkTo}>
      <Text>{text}</Text>
    </BoxLink>
  </Container>
);
