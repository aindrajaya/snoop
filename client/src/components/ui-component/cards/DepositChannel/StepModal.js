import React from "react";

import DepositModal from "./DepositModal";
import ModalChooseChannel from "./FirstStepDeposit";

import { useForm, useStep } from "react-hooks-helper";

const steps = [
  { id: "first" },
  { id: "second" },
  { id: "submit" }
];

const defaultData = {
  addressFromPk : "",
  tokenAddress: "",
  addressTo: "",
  amountDeposit : 0,
  channelKey: ""
}

function ModalApp({show, close}) {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
 
  const props = { formData, setForm, navigation, show, close };

  switch (id) {
    case "first":
      return <ModalChooseChannel {...props} />;
    case "second":
      return <DepositModal {...props} />;
    default:
      return null;
  }
}

export default ModalApp;