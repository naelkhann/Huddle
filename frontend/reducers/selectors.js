import { values } from 'lodash';

export const arrayOfCategories = ({categories}) => values(categories);

export const arrayOfHuddles = ({group}) => values(group.huddles);

export const arrayOfUpcomingHuddles = ({group}) => values(group.upcoming);

export const arrayOfPastHuddles = ({group}) => values(group.past);

export const arrayOfGroups = ({groups}) => values(groups);

export const arrayOfMembers = ({huddle}) => values(huddle.members);

export const getCategoriesNames = ({categories}) => {
  const categoriesArray = values(categories);
  const categoriesNames = categoriesArray.map(category => category.name);
  return categoriesNames;
}
