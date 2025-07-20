const categories = [
  {
    name: 'media-and-entertainment',
    label: 'Media and Entertainment',
  },
  {
    name: 'food-and-drink',
    label: 'Food and Drink',
  },
  {
    name: 'money-and-services',
    label: 'Money and Services',
  },
  {
    name: 'travel-and-transport',
    label: 'Travel and Transport',
  },
  {
    name: 'fashion-and-health',
    label: 'Fashion and Health',
  },
  {
    name: 'random',
    label: 'Random',
  },
];

export function useCategories(category: string) {
  return categories.find((c) => c.name === category) ?? { name: category, label: category };
}
