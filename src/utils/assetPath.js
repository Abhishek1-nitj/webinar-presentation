const ASSET_VERSION = '2';

export const assetPath = (path) => {
  const clean = encodeURI(path.replace(/^\/+/, ''));
  return `/webinar-presentation/${clean}?v=${ASSET_VERSION}`;
};
