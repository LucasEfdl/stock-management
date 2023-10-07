import { useContext } from "react";
import { stockContext } from "../contexts/StockContext";

export default function UseStock() {
    return useContext(stockContext)
}