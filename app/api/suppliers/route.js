import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      notes,
      contactPerson,
      supplierCode,
      taxID,
      paymentTerms,
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        notes,
        contactPerson,
        supplierCode,
        taxID,
        paymentTerms,
      },
    });
    console.log(supplier);
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a supplier",
      },
      {
        status: 500,
      }
    );
  }
}
