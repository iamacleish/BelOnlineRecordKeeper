import { User } from './user';

export class Realm {
  id: number;
  name: string;
  realmMembers: User[];
}
