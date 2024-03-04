import React from "react";
import { MainPageLayout } from "@/components/layout/MainPage.Layout";
import { FoodTypes } from "@/components/widgets/food_type_display";
import { NextRequest } from "next/server";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <React.Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          loading...
        </div>
      }
    >
      <MainPageLayout header={<FoodTypes />}>{children}</MainPageLayout>
    </React.Suspense>
  );
}
