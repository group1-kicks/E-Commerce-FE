import React from "react";

import { Form, Toggle } from "react-daisyui";

export function RememberMe() {
  return (
    <Form>
      <Form.Label title="Remember me">
        <Toggle />
      </Form.Label>
    </Form>
  );
}
