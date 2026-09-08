import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IRequest extends Document {
  name: string;
  email: string;
  telegram?: string;
  message: string;
  createdAt: Date;
}

const RequestSchema = new Schema<IRequest>({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  telegram: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

RequestSchema.index({ email: 1, createdAt: -1 });
RequestSchema.index({ createdAt: -1 });

// В Next hot-reload модель нельзя регистрировать повторно
export const RequestModel: Model<IRequest> =
  mongoose.models.Request ?? mongoose.model<IRequest>('Request', RequestSchema);
