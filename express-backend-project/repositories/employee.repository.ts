import { EmployeeModel, IEmployee } from './../models/employee.model';

export default class EmployeeRepository {
  async createEmployee(employeeData: IEmployee): Promise<IEmployee> {
     
    return await EmployeeModel.create(employeeData);
  }

  async getEmployees(): Promise<IEmployee[]> {
    return await EmployeeModel.find();
  }

  // Add more methods as needed
}


