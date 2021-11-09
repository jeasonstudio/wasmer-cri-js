import type { ImageServiceHandlers } from '../types/runtime/v1alpha2/ImageService';
import { ListImages } from './ListImages';

export const handler: Partial<ImageServiceHandlers> = {
  ListImages,
};

export default handler;
