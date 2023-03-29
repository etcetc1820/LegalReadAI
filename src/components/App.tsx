import { MainScreen } from './MainScreen/MainScreen';
import { Navigation } from './Navigation/Navigation';

const App: React.FC = () => {
  return (
    <div className="container screen">
      <Navigation />
      <MainScreen />
    </div>
  );
};

export default App;
