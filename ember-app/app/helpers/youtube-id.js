import { helper } from '@ember/component/helper';

export function youtubeId(params/*, hash*/) {
  const url = params[0];
  const matches = url.match(/(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[%#?&]|$)/i);
  return matches ? matches[1] : '';
}

export default helper(youtubeId);
