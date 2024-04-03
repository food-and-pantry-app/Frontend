const tagColors = {
  Produce: 'rgba(130, 179, 102, 0.42)',
  'Dairy & Eggs': 'rgba(255, 253, 208, 0.42)',
  'Meat & Seafood': 'rgba(255, 77, 77, 0.42)',
  'Canned Goods': 'rgba(74, 144, 226, 0.42)',
  'Dry Goods': 'rgba(210, 180, 140, 0.42)',
  'Baking Supplies': 'rgba(243, 156, 18, 0.42)',
  'Spices & Herbs': 'rgba(255, 160, 122, 0.42)',
  Snacks: 'rgba(155, 89, 182, 0.42)',
  Condiments: 'rgba(255, 215, 0, 0.42)',
  Beverages: 'rgba(173, 216, 230, 0.42)',
  'Frozen Foods': 'rgba(179, 229, 252, 0.42)',
};

export const getTagStyle = (tags) => {
  const backgroundColor = tagColors[tags[0]] || 'rgba(255, 255, 255, 0.42)'; // Default to semi-transparent white if tag not found
  // Dark background colors that may require white text for better readability
  const textColor = [
    'Meat & Seafood',
    'Spices & Herbs',
    'Snacks',
    'Condiments',
    'Beverages',
    'Frozen Foods',
  ].includes(tags[0])
    ? '#FFFFFF'
    : '#000000'; // White text for selected tags, black otherwise

  return { backgroundColor, color: textColor };
};
