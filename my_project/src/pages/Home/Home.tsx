import { FC, useEffect,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../../component/PageLayout/PageLayout';
import { getAllPersonsAction } from '../../redux/Persons/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './Home.module.scss';

const Home: FC= () => {
  const { persons } = useSelector((state: RootState) => state.getAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPersonsAction())
  }, []);


  return (
    <PageLayout>
      <div className={styles.container_container}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_cards}>
            {persons && persons.map((info) => (
              <a href={`${info._id}`} key={info._id} className={styles.container_cardInfo} >
                <img src={info.imageUrl} alt={info.name} className={styles.container_cardInfo_image}/>
                <div className={styles.container_cardInfo_name}>{info.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>


  )
};

export default Home;