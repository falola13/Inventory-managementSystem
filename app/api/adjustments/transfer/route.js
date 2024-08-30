import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { transferStockQty, givingWarehouseId, recievingWarehouseId, notes } =
      await request.json();

    const adjustment = {
      transferStockQty,
      givingWarehouseId,
      recievingWarehouseId,
      notes,
    };
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
