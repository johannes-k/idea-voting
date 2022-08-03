/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
      id
      title
      authorId
      description {
        en
        de
      }
      status
      ideas {
        items {
          id
          topicId
          authorId
          title
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
      id
      title
      authorId
      description {
        en
        de
      }
      status
      ideas {
        items {
          id
          topicId
          authorId
          title
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
      id
      title
      authorId
      description {
        en
        de
      }
      status
      ideas {
        items {
          id
          topicId
          authorId
          title
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateIdea = /* GraphQL */ `
  subscription OnCreateIdea($filter: ModelSubscriptionIdeaFilterInput) {
    onCreateIdea(filter: $filter) {
      id
      topicId
      authorId
      author {
        id
        email
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateIdea = /* GraphQL */ `
  subscription OnUpdateIdea($filter: ModelSubscriptionIdeaFilterInput) {
    onUpdateIdea(filter: $filter) {
      id
      topicId
      authorId
      author {
        id
        email
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteIdea = /* GraphQL */ `
  subscription OnDeleteIdea($filter: ModelSubscriptionIdeaFilterInput) {
    onDeleteIdea(filter: $filter) {
      id
      topicId
      authorId
      author {
        id
        email
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      title
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
`;
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
    onCreateVote(filter: $filter) {
      id
      authorId
      ideaId
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
    onUpdateVote(filter: $filter) {
      id
      authorId
      ideaId
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
    onDeleteVote(filter: $filter) {
      id
      authorId
      ideaId
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
