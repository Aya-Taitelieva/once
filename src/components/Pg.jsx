import { Box, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMainContext } from "../contexts/MainContext";
import { LIMIT } from "../utils/consts";

const Pg = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getPods, pageTotalCount, page, setPage } = useMainContext();

  useEffect(() => {
    getPods();
  }, [searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(_, val) => setPage(val)}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Pg;
