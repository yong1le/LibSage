import { handle, signIn } from '../../auth';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async (event) => {
    await signIn(event)
  }
};
