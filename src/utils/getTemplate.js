import { getTextTemplates } from '../data/constants';

// get a random template from the matching key
const getTemplate = (id) => {
  const templateItems = getTextTemplates(id);
  const rand = Math.floor(Math.random() * templateItems.length);
  const template = templateItems[rand];
  return template;
};

export default getTemplate;
