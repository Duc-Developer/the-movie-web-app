import React, { useEffect, useState } from "react";
import CommonPage from "../../../../components/CommonPage";
import axios from "axios";

export default function AiringTodayPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=${page}`
      )
      .then((response) => {
        setList(response.data.results);
        setTotalPages(response.data.total_pages);
      });
  }, [list.length, page, totalPages]);
  return (
    <div>
      <CommonPage
        listData={list}
        handlePageChange={(num) => {
          setPage(num);
        }}
        totalPages={totalPages}
      />
    </div>
  );
}
