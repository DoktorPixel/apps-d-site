import { useState } from 'react';
import axios from 'axios';

const useHttp = () => {
  const [isSended, setIsSended] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (requestData, target) => {
    const proxyEndpoint = '/api/proxy';

    try {
      const response = await axios.post(proxyEndpoint, {
        target,
        data: requestData,
      });
      setIsSended(true);

      return true;
    } catch (error) {
      setErrorMessage('Sorry, something went wrong. Please try again later.');
      console.error('Error:', error);
      return false;
    }
  };

  return {
    isSended,
    errorMessage,
    onSubmit,
  };
};

export default useHttp;
