import HttpStatusCode from './../../util/http-status-code';
import SnortAlertsService from '../../services/snort_alerts.service';
export default class SnortAlertsController {
  readonly snortAlertService = new  SnortAlertsService();
  getUser = async (request: any, response: any) => {
    try {
      const data = await this.snortAlertService.getAlerts();
      response.success(data);
    } catch (error: any) {
      response.error(
        'Failed to save user',
        HttpStatusCode.BAD_REQUEST,
        error.message
      );
    }
  }
 
}
