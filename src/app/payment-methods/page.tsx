import PaymentHome from "@/components/widgets/payment_method/PaymentHome";
import { SuccessDialog } from "@/components/widgets/success_dialog";

import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <PaymentHome />
      <SuccessDialog />
    </div>
  );
}
