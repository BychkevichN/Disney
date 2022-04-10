import { AppBar, IconButton , Typography, Toolbar, MenuItem, MenuList, Paper, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './PageLayout.module.scss';
import clsx from 'clsx';
import { personFilter} from '../../redux/Persons/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { RootState } from '../../redux/store';


const PageLayout: FC = ({ children }) => {
  const navigate = useNavigate();
  let { filterPerson } = useSelector((state: RootState) => state.getAll);
  const dispatch = useDispatch();
  const [press, setPress] = useState(false);

  const handleGoBack = () => {
    setPress(false);
    navigate('/');
  };

  const allDate = () => {
    dispatch(personFilter({...filterPerson, films: null, shortFilms: null, tvShows: null, videoGames: null}));
    handleGoBack();
  };
  const sortingByFilms = () => {
    if(filterPerson.films === null){
      dispatch(personFilter({ ...filterPerson, films: 1, shortFilms: null, tvShows: null, videoGames: null}));
      handleGoBack();
    };
  };
  const sortingByShortFilms = () => {
    if(filterPerson.shortFilms === null){
      dispatch(personFilter({ ...filterPerson, shortFilms: 1, films: null, videoGames: null, tvShows: null}));
      handleGoBack();
    };
  };
  const sortingByVideoGames = () => {
    if(filterPerson.videoGames === null){
      dispatch(personFilter({ ...filterPerson, videoGames: 1, films:null, tvShows: null, shortFilms: null}));
      handleGoBack();
    };
  };
  const sortingByTvShows = () => {
    if(filterPerson.tvShows === null){
      dispatch(personFilter({ ...filterPerson, tvShows: 1, films: null, shortFilms: null, videoGames: null}));
      handleGoBack();
    };
  };

  const handleClick = () => {
    if(!press) {
      setPress(true);
    }else {
      setPress(false);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <AppBar position="static"  className={styles.appBar} >
        <Toolbar className={styles.container}>
          <Stack direction="column" spacing={2} >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => handleClick()}
            >
              <MenuIcon />
            </IconButton>
            <Paper className={clsx(styles.none, press && styles.visibility)} sx={{zIndex: 'modal'}}>
              <MenuList>
                <MenuItem onClick={() => allDate()}>All</MenuItem>
                <MenuItem onClick={() => sortingByFilms()}>Films</MenuItem>
                <MenuItem onClick={() => sortingByShortFilms()}>Short-films</MenuItem>
                <MenuItem onClick={() => sortingByTvShows()}>TV-shows</MenuItem>
                <MenuItem onClick={() => sortingByVideoGames()}>Video-games</MenuItem>
                </MenuList>
            </Paper>
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => allDate()}
            className={styles.logo}
          >
            Disney
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div>
            Production by Nikolay Bychkevich
          </div>
          <div className={styles.footer_contacts}>
            <div className={styles.anchors}>
              <div>Instagram</div>
              <a href="https://www.instagram.com/syn_mam1n0y_p0drugi/"><InstagramIcon color="action"/></a>
            </div>
            <div className={styles.anchors}>
              <div>Telegram</div>
              <a href="https://telegram.org/@Prosto_Bel"><TelegramIcon color="action"/></a>
            </div>
            <div className={styles.anchors}>
              <div>LinkedIn</div>
              <a href="https://www.linkedin.com/in/nikolay-bychkevich-2714451aa/"><LinkedInIcon color="action"/></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PageLayout;
