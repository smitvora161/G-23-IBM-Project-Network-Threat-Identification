import mongoose, { Schema, Document } from 'mongoose';

export type IDepartment = {
  name: string;
};

const DepartmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const DepartmentModel = mongoose.model<IDepartment>('Department', DepartmentSchema);

export { DepartmentModel };
