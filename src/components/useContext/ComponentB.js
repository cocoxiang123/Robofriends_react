import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, ChannelContext } from "./Component";

function ComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* <ComponentC /> */}
      {user} - {channel}
    </div>
  );
}

export default ComponentB;
