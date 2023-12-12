import { createAsyncThunk } from "@reduxjs/toolkit";
import FinancialReportsService from "../../Services/FinancialReportService";

export const fetchInfosAsync = createAsyncThunk("info/fetchInfos", async () => {
  try {
    //Warning this endpoint is returning 402 for some reason (Payment required for usage error code )
    const data = await FinancialReportsService.getFinancialReports();
    return data.data.infos;
  } catch (error) {
    throw error;
  }
});
