import { useEffect, useState } from 'react';
import { useRequireAuth } from '../../hooks/UseAuth';
import { makeStyles } from '@material-ui/styles';
import { Result } from '../../generated';
import ComponentOrPending from '../../modules/ComponentOrPending';
import Provider from './components/Provider';
import Service from './components/Service';
import Header from './components/Header';

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
    <ComponentOrPending status={status}>
      <div className={classes.page}>
        {service != null && (
          <>
            <Header/>
            {/* todo check when this can be nulls */}
            <Provider email={service?.email!!} company={service?.company!!}/>
            <Service
              serviceAccess={{
                serviceCode: service.serviceCode,
                serviceAuthentication: service.serviceAuthentication,
                appKey: service.appKey
              }}
              info={{
                name: service.service!!, // todo check when this is null
                webhook: service.webhook!!
              }}/>
          </>
        )}
      </div>
    </ComponentOrPending>
  );
}

const useStyles = makeStyles(() => ({
    page: {
      display: 'flex',
      flexFlow: 'column',
      alignContent: 'center',
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '2%'
    },
    header: {
      alignSelf: 'top'
    }
  })
);
