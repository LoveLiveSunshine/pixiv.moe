import config from '@/config';

export default function getProxyImage(url: string) {
  const regex = /^http?s:\/\/i\.pximg\.net/i;
  if (regex.test(url)) {
    return `${config.apiBaseURL}/image/${url.replace(/^http?s:\/\//, '')}`;
  }
  return url;
}