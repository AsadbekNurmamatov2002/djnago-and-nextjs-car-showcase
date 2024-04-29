"use client";

import Image from "next/image"
import { CostomButtonType } from "./types";

export default function CostomButton({ title, contenstStayle, handleClicks}:CostomButtonType) {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${contenstStayle}`}
        onClick={handleClicks}
    >
        <span className={`flex-1`}>
           {title}
        </span>
    </button>
  )
}
