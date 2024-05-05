import mongoose, { Schema, Document } from 'mongoose';

export type IEmployee = {
  name: string;
  position: string;
  department: string;
};

const EmployeeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
  },
  { timestamps: true }
);

const EmployeeModel = mongoose.model<IEmployee>('Employee', EmployeeSchema);

export { EmployeeModel };
