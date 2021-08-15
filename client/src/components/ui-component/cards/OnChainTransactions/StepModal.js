import React from "react";

import OnChainModal from "./OnChainModal";
import ModalChooseChannel from "./FirstStepOnChainTransactions";

import { useForm, useStep } from "react-hooks-helper";

const steps = [
  { id: "first" },
  { id: "second" }
];

const defaultData = {
  addressFromPk : "",
  addressTo: "",
  amountTransfer : 0,
  channelKey: ""
}

function ModalAppOnChain({show, close}) {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
 
  const props = { formData, setForm, navigation, show, close };

  switch (id) {
    case "first":
      return <ModalChooseChannel {...props}/>
    case "second":
      return <OnChainModal {...props} />;
    default:
      return null;
  }
}

export default ModalAppOnChain;