import { values } from 'lodash';

export const arrayOfCategories = ({categories}) => values(categories);

export const arrayOfHuddles = ({group}) => values(group.huddles);

export const arrayOfFilteredHuddles = ({huddles}) => values(huddles).filter(h => h.past === false).sort((a, b) => b.date < a.date);

export const arrayOfUpcomingHuddles = ({group}) => values(group.upcoming);

export const arrayOfPastHuddles = ({group}) => values(group.past);

export const arrayOfGroups = ({groups}) => values(groups);

export const arrayOfMembers = ({huddle}) => values(huddle.members);

export const arrayOfGroupMembers = ({group}) => values(group.members);

export const getCategoriesNames = ({categories}) => {
  const categoriesArray = values(categories);
  const categoriesNames = categoriesArray.map(category => category.name);
  return categoriesNames;
}
