import './i18n';
import { NationLabels } from './components/Label';
import { useTranslation } from 'react-i18next';

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

const currentUser = {
  displayName: 'user1',
  accountId: '123',
  isVerified: true
};

const CurrentUser = ({ accountId, displayName, isVerified }: UserModel) => {
  return (
    <header className="current-user">
      <h2>
        {displayName} {isVerified && '✅'}
      </h2>
    </header>
  );
};

const App = () => {
  const { t } = useTranslation();
  return (
    <main>
      <CurrentUser {...currentUser} />
      <section>
        <h3> {t('nation')}</h3>
        <NationLabels />
      </section>
    </main>
  );
};

export default App;
