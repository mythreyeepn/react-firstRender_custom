import React ,  {useRef} from "react";
import "./style.css";
export function useIsFirstRender() {
  // your code here
  const isFirstRender = useRef(true)

  if(isFirstRender.current){
    isFirstRender.current=false
    return true;
  }
return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export default function App() {
    const isFirstRender = useIsFirstRender()

  return (
    <div>
      {isFirstRender ? <p>First render</p> : <p>Not first render</p>}

    </div>
  );
}
