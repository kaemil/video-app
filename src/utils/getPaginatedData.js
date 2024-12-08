import { PAGE_SIZE_OPTIONS } from '../consts';

/**
 * Getting data for page based on page and page size.
 */
const getPaginatedData = (
  array = [],
  page = 1,
  pageSize = PAGE_SIZE_OPTIONS[0]
) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return array.slice(startIndex, endIndex);
};

export default getPaginatedData;
