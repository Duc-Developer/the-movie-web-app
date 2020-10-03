import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonPage from "../../../../components/CommonPage";

export default function PopularPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=${page}`
      )
      .then((res) => {
        setList(res.data.results);
        setTotalPages(res.data.total_pages);
      });
  }, [list.length, page]);

  return (
    <div>
      <CommonPage
        listData={list}
        totalPages={totalPages}
        handlePageChange={(num) => {
          setPage(num);
        }}
      />
    </div>
  );
}
