import { IInfo } from "../interfaces";
import FinancialInfoModel from "../models/FinancialInfoModel";
import BaseApiService, { ApiResponse } from "./BaseApiService";

class FinancialReportsService extends BaseApiService {
  public async getFinancialReports(): Promise<ApiResponse<FinancialInfoModel>> {
    const url = "home";

    try {
      const response = await this.get<FinancialInfoModel>(url);
      return response;
    } catch (error) {
      console.error("Error fetching financial reports:", error);
      return {
        data: null as unknown as FinancialInfoModel,
        status: 500,
      };
    }
  }
}

export default new FinancialReportsService();
