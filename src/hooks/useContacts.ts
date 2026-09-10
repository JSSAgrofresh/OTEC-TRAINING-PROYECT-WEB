import { useCallback, useEffect, useState } from 'react';
import * as contactsService from '../services/contactsService';
import { STORAGE_CHANGE_EVENT } from '../services/storage';
import type { ContactRecord } from '../types/contact';

/** Lee el registro de contactos y se mantiene sincronizado: se actualiza
 * solo cuando se agrega un contacto nuevo (misma pestaña u otra), sin
 * necesitar que el usuario recargue la página. */
export function useContacts(): ContactRecord[] {
  const [contacts, setContacts] = useState<ContactRecord[]>(() => contactsService.getContacts());

  const refresh = useCallback(() => {
    setContacts(contactsService.getContacts());
  }, []);

  useEffect(() => {
    window.addEventListener('storage', refresh);
    window.addEventListener(STORAGE_CHANGE_EVENT, refresh as EventListener);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(STORAGE_CHANGE_EVENT, refresh as EventListener);
    };
  }, [refresh]);

  return contacts;
}
