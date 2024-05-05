import { ISnortAlert } from "../models/snort_alerts.model";
import SnortAlertRepository from "../repositories/snort_alerts.repository";

export default class SnortAlertsService {
    readonly snortAlertRepository = new SnortAlertRepository();
    async getAlerts(): Promise<ISnortAlert[]> {
        return this.snortAlertRepository.getAlerts();
    }
}