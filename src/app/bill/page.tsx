import { PaymentDialog } from "@/components/widgets/success_dialog/PaymentDialog";
import { Summary } from "@/components/widgets/summary_card";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Summary /> <PaymentDialog />
    </div>
  );
}
