import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../features/details/Info';
import { useDetails } from '../features/details/use-details';

export const Details = () => {
  const navigate = useNavigate();

  const [currentCountry, error, status] = useDetails();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
