import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserList } from '../../components/UserList/UserList';

export default function Tweets() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tweets</title>
        </Helmet>
      </HelmetProvider>
      <UserList />
    </div>
  );
}
