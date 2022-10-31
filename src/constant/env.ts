export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

// export const apiUrl = 'https://api.cue8949.com';
// export const testApiUrl = 'http://kimchibilliards.synology.me:8000';
export const testApiUrl = 'http://nangmanski.iptime.org:7979/';