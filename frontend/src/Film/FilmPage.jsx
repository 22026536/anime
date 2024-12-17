import React from "react";
import BasicPagination from "../component/BasicPagination";
import { Box } from "@mui/material";
import FilmCard from "./FilmCard";
import { useTheme } from "@emotion/react";
import { useState } from "react";

export default function FilmPage({ data }) {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const filmsPerPage = 14;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;

  // Khai báo currentFilms ngoài khối if
  let currentFilms = [];
  if (Array.isArray(data) && data.length > 0) {
    currentFilms = data.slice(indexOfFirstFilm, indexOfLastFilm);
  }

  const totalPages = Math.max(Math.ceil((data?.length || 0) / filmsPerPage), 1);

  return (
    <Box sx={{ width: "100vw", marginTop: "2vh" }}>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginLeft: "6%",
        }}
      >
        {currentFilms.map((item) => (
          <FilmCard
            key={item.Anime_id}
            image={item["Image URL"]}
            name={item.Name}
            level={item.JapaneseLevel}
            view={item.Members}
            score={item.Score}
            index={item.Anime_id}
            className="film-card"
          />
        ))}
      </Box>

      {data && (
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BasicPagination
            count={totalPages}
            page={currentPage}
            changee={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
}
