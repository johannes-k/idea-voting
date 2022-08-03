/* Amplify Params - DO NOT EDIT
	API_IDEAVOTING_GRAPHQLAPIENDPOINTOUTPUT
	API_IDEAVOTING_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

require('isomorphic-fetch')
const { createAuthLink, AUTH_TYPE } = require('aws-appsync-auth-link')
const { defaultProvider } = require('@aws-sdk/credential-provider-node')
const {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  gql
} = require('@apollo/client/core')

let apolloClient

exports.handler = async (event, context) => {
  console.log(`### CREATING NEW USER FROM EVENT: ${JSON.stringify(event)}`)
  console.log(`Trigger Source: ${event?.triggerSource}`)

  if (event?.triggerSource !== 'PostConfirmation_ConfirmSignUp') {
    console.log(`Trigger source was not "PostConfirmation_ConfirmSignUp". Skipping.`)
    return event
  }

  if (
    !event?.request?.userAttributes?.email ||
    !event?.request?.userAttributes?.sub ||
    !event?.request?.userAttributes?.name
  ) {
    console.error(`Could not extract email, sub or name from received event.`)
    console.log(JSON.stringify(event, null, 2))
    throw new Error(`Received malformed event.`)
  }

  const user = await createNewUser(
    event.request.userAttributes.sub,
    event.request.userAttributes.email,
    event.request.userAttributes.name
  )

  console.log(`Successfully created user ${JSON.stringify(user)}`)

  return event
}

const createNewUser = async (sub, email, name) => {
  const variables = {
    input: {
      id: sub,
      email: email,
      name: name
    }
  }

  console.log(`Creating new user ${JSON.stringify(variables.input)}`)
  try {
    return await executeMutation(createUser, variables)
  } catch (e) {
    console.error(`An error occurred while creating user ${variables.input.id}`)
    throw new Error('Error creating user. Please contact an administrator.')
  }
}

/*****************************
 *      Helper Functions     *
 *****************************/

// generic mutation function.  A way to quickly reuse mutation statements
const executeMutation = async (mutation, variables) => {
  if (!apolloClient) {
    apolloClient = initializeApolloClient()
  }
  try {
    const response = await apolloClient.mutate({
      mutation: gql(mutation),
      variables,
      fetchPolicy: 'no-cache'
    })
    return response.data
  } catch (err) {
    console.warn(`Error while trying to mutate data`)
    console.log(err)
    throw err
  }
}

// initializes our graphql client
const initializeApolloClient = () => {
  let apolloClient

  const url = process.env.API_IDEAVOTING_GRAPHQLAPIENDPOINTOUTPUT
  const httpLink = createHttpLink({ uri: url })
  const region = process.env.REGION
  const auth = {
    type: AUTH_TYPE.AWS_IAM,
    credentials: defaultProvider()
  }
  const link = ApolloLink.from([createAuthLink({ url, region, auth }), httpLink])
  try {
    apolloClient = new ApolloClient({
      link: link,
      cache: new InMemoryCache()
    })
  } catch (error) {
    console.error(`Could not initialize apollo client`)
    throw new Error('Could not initialize apollo client')
  }

  return apolloClient
}

/*****************************
 *     Graphql Mutations     *
 *****************************/

const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`
