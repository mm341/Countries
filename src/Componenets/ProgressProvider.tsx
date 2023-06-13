import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";


type props={
    valueStart:number;
    valueEnd:number;
    children:(value:number)=>ReactJSXElement
}
const ProgressProvider = ({ valueStart, valueEnd, children }:props) => {
    const [value, setValue] = React.useState(valueStart);
    React.useEffect(() => {
      setValue(valueEnd);
    }, [valueEnd]);
  
    return children(value);
  };
  export default ProgressProvider;