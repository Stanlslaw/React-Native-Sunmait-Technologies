import {useEffect, useState} from 'react';

import {mmkvStore} from '../mmkv/store';
import {Auth} from '../utils/auth.service';

export default function useBiometricState() {
  const [isBiometric, setIsBiometric] = useState(
    mmkvStore.getBoolean('biometric.isActive'),
  );
  const handleBiometric = val => {
    setIsBiometric(Auth.ChangeBiometricUsage());
  };
  return [isBiometric, handleBiometric];
}
