import { useEffect, useState } from 'react';
import { useRequireAuth } from '../../hooks/UseAuth';
import { makeStyles } from '@material-ui/styles';
import { Result } from '../../generated';
import { CircularProgress } from '@material-ui/core';

/**
 * Login Page, redirects to home after
 */
export default function HomePage() {
  const { api } = useRequireAuth();

  const [status, setStatus] = useState<'idle' | 'pending'>('idle');

  const [service, setService] = useState<Result | null>(null);

  useEffect(() => {
    if (service) {
      return;
    }

    setStatus('pending');

    api.get2()
    .then(r => setService(r))
    .then(() => setStatus('idle'))
    .catch((e) => console.error(e)); // todo maybe some error handling
  }, [service, api]);

  const classes = useStyles();
  return (
    // we use hidden just as a precaution if the suer already exist
    // to not to "blick" with the login window
    <div className={classes.page}>
      {status === 'pending'
        ? <CircularProgress size={'1.5rem'}/>
        : <span>App Key: {service?.appKey}</span>
      }
    </div>
  );
}

const useStyles = makeStyles(() => ({
    page: {
      display: 'flex',
      flexFlow: 'column',
      alignContent: 'center',
      justifyContent: 'center'
    },
    form: {
      display: 'flex',
      flexFlow: 'column',
      '& > div': {
        margin: '10px',
        width: '25ch'
      }
    },
    infoBox: {
      color: 'red'
    }
  })
);
