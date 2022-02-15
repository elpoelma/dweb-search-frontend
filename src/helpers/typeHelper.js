import DocumentDetail from '@/components/results/detail/DocumentDetail.vue';
import ImageDetail from '@/components/results/detail/ImageDetail.vue';
import VideoDetail from '@/components/results/detail/VideoDetail.vue';
import AudioDetail from '@/components/results/detail/AudioDetail.vue';
import DirectoryDetail from '@/components/results/detail/DirectoryDetail.vue';

export const fileTypes = [
  'text',
  'audio',
  'images',
  'video',
  'directories',
];

export const searchTypes = [
  'any',
  ...fileTypes,
];

export const Types = {
  any: 'any',
  text: 'text',
  audio: 'audio',
  images: 'images',
  video: 'video',
  directories: 'directories',
};

export const DetailComponent = {
  text: DocumentDetail,
  audio: AudioDetail,
  images: ImageDetail,
  video: VideoDetail,
  directories: DirectoryDetail,
};

export default {
  fileTypes,
  searchTypes,
  Types,
  DetailComponent,
};
