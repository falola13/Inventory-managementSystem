"use client";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddInventoryForm() {
  const items = [
    {
      label: "Item A",
      value: "65587sdsd90",
    },
    {
      label: "Item B",
      value: "ssdsdsd",
    },
    {
      label: "Item C",
      value: "ssdsdsd",
    },
  ];
  const branches = [
    {
      label: "Main A",
      value: "65587sdsd90",
    },
    {
      label: "Main B",
      value: "ssdsdsd",
    },
    {
      label: "Main C",
      value: "ssdsdsd",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data);
    makePostRequest(
      setLoading,
      "api/adjustments/add",
      data,
      "Stock Adjustment",
      reset
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInputs
          type="number"
          label="Reference Number"
          name="referenceNumber"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select the Item"
          name="itemId"
          register={register}
          className="w-full"
          options={items}
        />

        <TextInputs
          type="number"
          label="Quantity of Stock to Add"
          name="addStockQty"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select the Warehouse that will receive the Stock"
          name="receivingWarehouseId"
          register={register}
          className="w-full"
          options={branches}
        />
        <TextareaInput
          label="Adjustment Notes"
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title="Adjustment" />
    </form>
  );
}
