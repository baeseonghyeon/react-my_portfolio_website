const externalLinkText = (urlType) => {
  if (urlType === 'web') {
    return 'Visit the website →';
  }
  if (urlType === 'mobile') {
    return 'Visit the website(Mobile Only) →';
  }
  if (urlType === 'github') {
    return 'Visit the Github Code →';
  }
  return 'Visit the link →';
};

export default externalLinkText;
