const externalLinkText = (urlType) => {
  if (urlType !== null) {
    return `Visit the ${urlType} →`;
  } else {
    return 'Visit the link →';
  }
};

export default externalLinkText;
