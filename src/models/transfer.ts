import {IContact} from './contact';

export interface ITransfer {
  Id: string;
  ClienteId: number;
  Valor: number;
  contact?: IContact;
}
