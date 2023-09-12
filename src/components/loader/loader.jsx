import loader from '../../assets/images/preloader.gif';
import { LoaderImg } from './styles';

const Loader = () => {
  return <LoaderImg src={loader} alt="идет загрузка" />;
};

export default Loader;
