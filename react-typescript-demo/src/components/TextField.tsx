import React, {useRef} from 'react';


const TextField: React.FunctionComponent<{ text: string }> = ({text}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      {text}
      <input ref={inputRef}/>
    </div>
  );
};

export default TextField;