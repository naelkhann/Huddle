import { values } from 'lodash';

export const arrayOfCategories = ({categories}) => values(categories);

export const arrayOfHuddles = ({group}) => values(group.huddles);

export const arrayOfMembers = ({huddle}) => values(huddle.members);
