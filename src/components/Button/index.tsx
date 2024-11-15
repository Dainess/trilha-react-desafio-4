import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

function alt() {
  return null;
}

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return disabled ? <ButtonContainer onClick={onClick}>{title}</ButtonContainer> 
  : <ButtonContainer onClick={alt}>{title}</ButtonContainer>;
};

export default Button;
