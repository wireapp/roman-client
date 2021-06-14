import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useRequireAuth } from '../../../hooks/UseAuth';

export default function Header() {
  const { user, logout } = useRequireAuth();
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <Button href={`${window.origin}/swagger`}>Wire Roman Swagger</Button>

      <Button onClick={logout}>Logout - {user}</Button>
    </div>
  );
}

const useStyles = makeStyles(() => ({
    header: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-around'
    }
  })
);

