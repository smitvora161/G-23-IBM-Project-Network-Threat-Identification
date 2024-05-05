import { IEmployee } from "../models/employee.model";
import EmployeeRepository from "../repositories/employee.repository";

export default class EmployeeService {

    readonly employeeRepository = new EmployeeRepository();

    async createEmployee(employeeData: IEmployee): Promise<IEmployee> {
        
        return this.employeeRepository.createEmployee(employeeData);
    }

    async getEmployees(): Promise<IEmployee[]> {

        return this.employeeRepository.getEmployees();
    }
}