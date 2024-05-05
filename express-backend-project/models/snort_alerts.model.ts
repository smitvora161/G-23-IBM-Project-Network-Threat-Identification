import mongoose, { Schema, Document } from 'mongoose';

export type ISnortAlert = {
 content: string;
};

const SnortAlertSchema: Schema = new Schema(
  {
    content: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const SnortAlertModel = mongoose.model<ISnortAlert>('SnortAlert', SnortAlertSchema);

export { SnortAlertModel };
