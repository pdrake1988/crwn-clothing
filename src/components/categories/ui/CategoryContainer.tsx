import styled from "styled-components";
import CategoryBodyContainer from "./CategoryBodyContainer.tsx";

const CategoryContainer = styled.div<{ imageUrl: string }>`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  & .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.imageUrl});
  }
`;

export default CategoryContainer;
