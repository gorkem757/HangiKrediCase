import { createAsyncThunk } from "@reduxjs/toolkit";
import FinancialReportsService from "../../Services/FinancialReportService";

export const fetchInfosAsync = createAsyncThunk("info/fetchInfos", async () => {
  try {
    const data = await FinancialReportsService.getFinancialReports();
    console.log("data")
    console.log(data)
    console.log("data")
    return data.data.infos;
  } catch (error) {
    throw error;
  }
});
