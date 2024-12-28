import { Injectable } from '@angular/core';
import { User } from '../Interfaces/auth';
import { firstValueFrom } from 'rxjs';

import { gql, Apollo } from 'apollo-angular';

const mut = gql`
  mutation refactored267($data: CreateUserDto!) {
    addUser(data: $data) {
      id
      email
      password
      name
      role
      avatar
      creationAt
      updatedAt
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}
  async registerUser(us: User) {
    const res = this.apollo.mutate({
      mutation: mut,
      variables: {
        data: us,
      },
    });
    const xx = await firstValueFrom(res);
    return xx;
  }
}
