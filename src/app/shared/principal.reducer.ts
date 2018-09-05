import { SavePrincipalAction} from './save.principal.action';
import {Principal} from './principal.model';
import {Action} from '@ngrx/store';
import {SAVE_PRINCIPAL} from './save.principal.action';

export class PrincipalReducer {

  constructor(state: Principal, action: SavePrincipalAction) {
    switch (action.type) {
     case SAVE_PRINCIPAL:
       return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  }
}
