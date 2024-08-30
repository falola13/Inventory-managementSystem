"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInputs from "@/components/FormInputs/TextInputs";
import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      label: "Electronics",
      value: "aeriry88990r8ryr",
    },
    {
      label: "Clothes",
      value: "brageg7878ryws",
    },
    {
      label: "Others",
      value: "brageg7878rywszww3",
    },
  ];
  const units = [
    {
      label: "Kg",
      value: "aeriry88990r8ryr",
    },
    {
      label: "Pcs",
      value: "brageg7878ryws",
    },
  ];
  const brands = [
    {
      label: "HP",
      value: "aeriry88990r8ryr",
    },
    {
      label: "DELL",
      value: "brageg7878ryws",
    },
    {
      label: "OTHERS",
      value: "22brageg7878ryws",
    },
  ];
  const suppliers = [
    {
      label: "Supplier A",
      value: "aeriry88990r8ryr",
    },
    {
      label: "Supplier B",
      value: "brageg7878ryws",
    },
    {
      label: "Supplier C",
      value: "22brageg7878ryws",
    },
  ];
  const warehouses = [
    {
      label: "Lagos A",
      value: "aeriry88990r8dgdh",
    },
    {
      label: "Lagos B",
      value: "aeriry88990r8ryr",
    },
    {
      label: "ABK A",
      value: "brageg7878ryjjf",
    },
    {
      label: "ABK B",
      value: "brageg7878rysd",
    },
    {
      label: "Ibadan A",
      value: "brageg7878ryws",
    },
    {
      label: "Ibadan B",
      value: "brageg7878rasass",
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
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInputs
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            className="w-full"
            options={categories}
          />

          <TextInputs
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            isRequired="false"
            className="w-full"
          />
          <TextInputs
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            className="w-full"
            options={units}
          />
          <SelectInput
            name="brandId"
            label="Select the Item Brand"
            register={register}
            className="w-full"
            options={brands}
          />
          <TextInputs
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInputs
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="supplierId"
            label="Select the Item Supplier"
            register={register}
            className="w-full"
            options={suppliers}
          />
          <TextInputs
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="warehouseId"
            label="Select the Item Warehouse"
            register={register}
            className="w-full"
            options={warehouses}
          />
          <TextInputs
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInputs
            label="Item Dimensions in cm (20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Item Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
