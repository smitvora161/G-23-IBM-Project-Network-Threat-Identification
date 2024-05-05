import { IDepartment } from "../models/department.model";
import DepartmentRepository from "../repositories/department.repository";

export default class DepartmentService {

    readonly departmentRepository = new DepartmentRepository();

    async createDepartment(departmentData: IDepartment): Promise<IDepartment> {
        return this.departmentRepository.createDepartment(departmentData);
    }

    async getDepartments(): Promise<IDepartment[]> {
        return this.departmentRepository.getDepartments();
    }
}