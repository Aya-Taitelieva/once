import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { LIMIT } from "../utils/consts";
import { useMainContext } from "../contexts/MainContext";

export default function Filter() {
  const { setPage, getPods } = useMainContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, settitle] = React.useState(searchParams.get("title") || "all");

  const handleChange = (_, value) => {
    value && settitle(value);
  };
  React.useEffect(() => {
    getPods();
  }, [searchParams]);

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (title == "all") {
      const { _page, q } = currentParams;
      setSearchParams({
        _limit: LIMIT,
        _page: _page || 1,
        _q: q || "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        title,
      });
      setPage(1);
    }
  }, [title]);

  return (
    <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
      <ToggleButtonGroup
        color="primary"
        value={title}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="WAKA">WAKA</ToggleButton>
        <ToggleButton value="Elf Bar">Elf Bar</ToggleButton>
        <ToggleButton value="Ox Bar">Ox Bar</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
