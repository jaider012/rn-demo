import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ROLE_PERMISSIONS, ScreenName} from '../types/permissions';

export const useScreenAccess = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  const role = user?.role ?? 'guest';

  const hasAccess = (screenName: ScreenName) => {
    return ROLE_PERMISSIONS[role].includes(screenName);
  };

  return {hasAccess};
};
