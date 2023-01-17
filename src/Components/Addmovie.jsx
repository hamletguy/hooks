import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Addmovie({ addMovie }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const onAddMovie = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      name,
      genre,
      poster,
      trailer,
      description,
      rating: Number(rating),
    };
    addMovie(newMovie);
    setName("");
    setGenre("");
    setRating("");
    setPoster("");
    setTrailer("");
    setDescription("");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  movie name
                </label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  genre
                </label>
                <input
                  value={genre}
                  onChange={(event) => setGenre(event.target.value)}
                  type="text"
                  className="form-control"
                  name="genre"
                  id="genre"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  rating
                </label>
                <input
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  type="number"
                  className="form-control"
                  name="rating"
                  id="rating"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="poster" className="form-label">
                  poster
                </label>
                <input
                  value={poster}
                  onChange={(event) => setPoster(event.target.value)}
                  type="url"
                  className="form-control"
                  name="poster"
                  id="poster"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="trailer" className="form-label">
                  trailer
                </label>
                <input
                  value={trailer}
                  onChange={(event) => setTrailer(event.target.value)}
                  type="url"
                  className="form-control"
                  name="trailer"
                  id="trailer"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  description
                </label>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="form-control"
                  name="description"
                  id="description"
                  aria-describedby="emailHelp"
                >
                  {" "}
                </textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onAddMovie}
              >
                Add
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
