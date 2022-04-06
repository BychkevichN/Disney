import { AppBar, Container, Button } from '@mui/material';
import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './PageLayout.module.scss';


const PageLayout: FC = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.container}>
          <div className={styles.logo} onClick={() => navigate('/')}>Disney</div>
        </Container>
      </AppBar>
      {children}
    </div>
  );
};

export default PageLayout;
