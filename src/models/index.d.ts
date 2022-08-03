import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TopicStatus {
  PLANNING = "PLANNING",
  RUNNING = "RUNNING",
  FINISHED = "FINISHED"
}

export declare class MultilingualString {
  readonly en: string;
  readonly de?: string | null;
  constructor(init: ModelInit<MultilingualString>);
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IdeaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Topic {
  readonly id: string;
  readonly title: string;
  readonly authorId?: string | null;
  readonly description?: MultilingualString | null;
  readonly status: TopicStatus | keyof typeof TopicStatus;
  readonly ideas?: (Idea | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Topic, TopicMetaData>);
  static copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}

export declare class Idea {
  readonly id: string;
  readonly topicId: string;
  readonly authorId: string;
  readonly author?: User | null;
  readonly title: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Idea, IdeaMetaData>);
  static copyOf(source: Idea, mutator: (draft: MutableModel<Idea, IdeaMetaData>) => MutableModel<Idea, IdeaMetaData> | void): Idea;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Vote {
  readonly id: string;
  readonly authorId: string;
  readonly ideaId: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vote, VoteMetaData>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote, VoteMetaData>) => MutableModel<Vote, VoteMetaData> | void): Vote;
}