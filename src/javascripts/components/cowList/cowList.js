import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cowlist', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
