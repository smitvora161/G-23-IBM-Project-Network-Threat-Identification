import { DepartmentModel, IDepartment } from './../models/department.model';

export default class DepartmentRepository {
  async createDepartment(departmentData: IDepartment): Promise<IDepartment> {
    const createdEmployee = await DepartmentModel.create(departmentData);
    return createdEmployee.toObject()
  }

  async getDepartments(): Promise<IDepartment[]> {
    return await DepartmentModel.find();
  }

  // Add more methods as needed
}
 
