// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TopicStatus = {
  "PLANNING": "PLANNING",
  "RUNNING": "RUNNING",
  "FINISHED": "FINISHED"
};

const { Topic, Idea, User, Vote, MultilingualString } = initSchema(schema);

export {
  Topic,
  Idea,
  User,
  Vote,
  TopicStatus,
  MultilingualString
};