import { useState } from 'react';

import { PAGE_SIZE_OPTIONS } from '../consts';

/**
 * Handling pagination.
 */
const usePagination = ({ total }) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  const hangleCurrentChange = (page) => setCurrent(page);

  const handlePageSizeChange = (current, size) => setPageSize(size);

  return {
    current,
    pageSize,
    total,
    pageSizeOptions: PAGE_SIZE_OPTIONS,
    onChange: hangleCurrentChange,
    onShowSizeChange: handlePageSizeChange,
  };
};

export default usePagination;
