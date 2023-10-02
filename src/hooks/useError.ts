import {useEffect} from 'react';
import {useToast} from 'react-native-toast-notifications';

export default function useError(error?: unknown) {
  const toast = useToast();

  useEffect(() => {
    if (!error) {
      return;
    }
    console.error(error);
    let id = toast.show('Ошибка', {type: 'danger', placement: 'top'});
    return () => toast.hide(id);
  }, [toast, error]);
}
