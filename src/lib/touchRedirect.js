// import { useHistory } from 'react-router';

const touchRedirect = (url, screenSize) => {
  // const history = useHistory();
  if (screenSize > 769) {
    // history.push(url);
    window.location.href = url;
  }
};

export default touchRedirect;
