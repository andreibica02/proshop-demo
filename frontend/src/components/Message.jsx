import { Alert } from "react-bootstrap";

import React from "react";

const Message = ({ varient, children }) => {
  return (
    <div>
      <Alert variant={varient}>{children}</Alert>
    </div>
  );
};

Message.defaultProp = {
  variant: "info",
};
export default Message;
