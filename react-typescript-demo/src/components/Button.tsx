// @ts-ignore
import React, {useReducer, useState} from 'react';

//optional props
// error button
// how to use it
interface Person {
  fName: string;
  lName: string;
}

interface Props {
  text: string;
  bColor: string;
  width?: number;
  fn: () => void; // function return void
  setName?: (name: string) => string; // function return void
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  person?: Person;
}

// @ts-ignore
const Button: React.FunctionComponent<Props> = ({
                                                  person, bColor, children, fn, setName
                                                  , text, width
                                                  , handleClick
                                                }) => {
  const [count, setCount] = useState<number | null | undefined>(0);
  setCount(12)
  setCount(null)
  return (
    <div onClick={handleClick}>
      {text}
    </div>
  );
};

// @ts-ignore
export default Button;