import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../component/PageLayout/PageLayout';
import { getPersonAction } from '../../redux/Persons/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './PersonDetail.module.scss';

const PersonDetails: FC= () => {
  const { person } = useSelector((state: RootState) => state.getPerson);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonAction(Number(id)));
  }, [id]);

  return (
    <PageLayout>
      <div className={styles.container_container}>
        <div className={styles.container_wrapper}>
          {person && (
            <div key={person._id} className={styles.container_cardInfo}>
              <img src={person.imageUrl} alt={person.name} className={styles.container_cardInfo_image}/>
              <div className={styles.container_cardInfo_name}>{person.name}</div>
              <div>
                {/* <strong>Films</strong> */}
                {person.films !== [] && person.films.map((film) => (
                  <div key={film}><strong>Film: </strong>{film}</div>
                ))}
              </div>
              {person.shortFilms !== [] && (
                <div>
                  {/* <strong>Short films</strong> */}
                  {person.shortFilms.map((film) => (
                    <div key={film}><strong>Short films: </strong>Short films: {film}</div>
                  ))}
              </div>
              )}
              <div>
                {/* <strong>TV-Shows</strong> */}
                {person.tvShows !== [] && person.tvShows.map((shows) => (
                  <div key={shows}><strong>TV-Shows:</strong> {shows}</div>
                ))}
              </div>
              <div>
                {/* <strong>videoGames</strong> */}
                {person.videoGames !== [] && person.videoGames.map((games) => (
                  <div key={games}><strong>VideoGames:</strong> {games}</div>
                ))}
              </div>
              <div>
                {/* <strong>TV-Shows</strong> */}
                {person.parkAttractions !== [] && person.parkAttractions.map((park) => (
                  <div key={park}><strong>ParkAttractions: </strong>{park}</div>
                ))}
              </div>
              <div>
                {/* <strong>TV-Shows</strong> */}
                {person.allies !== [] && person.allies.map((allies) => (
                  <div key={allies}><strong>Allies: </strong>{allies}</div>
                ))}
              </div>
              <div>
                {/* <strong>TV-Shows</strong> */}
                {person.enemies !== [] && person.enemies.map((enemies) => (
                  <div key={enemies}><strong>Enemies: </strong>{enemies}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
};

export default PersonDetails;