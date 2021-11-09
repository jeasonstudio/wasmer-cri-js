import type { ImageServiceHandlers } from '../types/runtime/v1alpha2/ImageService';

export const ListImages: ImageServiceHandlers['ListImages'] = (
  { request },
  callback
) => {
  const condition = request?.filter?.image ?? null;
  if (condition?.image) {
    console.log('filter by image name:', condition?.image);
  }
  if (condition?.annotations) {
    console.log('filter by image annotations:', condition?.annotations);
  }
  callback(null, {
    images: [
      {
        id: 'test',
        repoTags: ['tag'],
        repoDigests: ['digests'],
        size: 1,
        uid: null,
        username: 'jeason',
        spec: null,
      },
    ],
  });
};
