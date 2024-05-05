import { ISnortAlert, SnortAlertModel } from "../models/snort_alerts.model";
export default class SnortAlertRepository{
    async getAlerts(): Promise<ISnortAlert[]> {
        return await SnortAlertModel.find();
    }
}