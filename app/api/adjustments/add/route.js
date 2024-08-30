import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, receivingWarehouseId, notes } = await request.json();

    const adjustment = { addStockQty, receivingWarehouseId, notes };
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create an adjustment",
      },
      {
        status: 500,
      }
    );
  }
}
