import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/store';

const MockMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Mission component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<MockMissions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});