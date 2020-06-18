import React from "react";
import ComponentA from "./ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function Component() {
  return (
    <div>
      <UserContext.Provider value={"Coco"}>
        <ChannelContext.Provider value={"hello"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Component;
