import { makeStyles } from '@material-ui/styles';

interface ProviderInfo {
  email: string
  company: string
}

export default function Provider(info: ProviderInfo) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div>email: {info.email}</div>

      company: {info.company}
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
