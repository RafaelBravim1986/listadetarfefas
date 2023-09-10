import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  border: 3px solid;

  label {
    color: white;
    font-size: 25px;
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }

  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;
