import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      transferStockQty,
      itemId,
      givingWarehouseId,
      recievingWarehouseId,
      referenceNumber,
      notes,
    } = await request.json();

    const adjustment = await db.transferStockAdjustment.create({
      data: {
        transferStockQty: parseInt(transferStockQty),
        itemId,
        givingWarehouseId,
        recievingWarehouseId,
        referenceNumber,
        notes,
      },
    });
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
