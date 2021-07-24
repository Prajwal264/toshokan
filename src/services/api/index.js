import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

/**
 *
 *
 * @class Graphql
 */
class Graphql {
  /**
   * Creates an instance of Graphql.
   * @memberof Graphql
   */
  constructor() {
    this.client = new ApolloClient({
      uri: 'http://localhost:4000',
      cache: new InMemoryCache(),
    });
    this.gql = gql;
  }

  /**
   *
   *
   * @param {*} params
   * @return {*}
   * @memberof Graphql
   */
  query(params) {
    return this.client.query(params);
  }
}

/**
 *
 *
 * @class User
 * @extends {Graphql}
 */
class User extends Graphql {
  /**
   *
   * returns a mutation string to
   * register a user.
   * @return {*}
   * @memberof User
   */
  register() {
    const REGISTER_MUTATION = this.gql`
      mutation Register(
        $username: String!
        $email: String!
        $password: String!
        $role: String!
      ) {
        id
        token
      }
    `;
    return REGISTER_MUTATION;
  }
}

export { Graphql, User };
