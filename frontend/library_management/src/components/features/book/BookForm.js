import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: 1, label: "총류" },
  { value: 2, label: "철학" },
  { value: 3, label: "종교" },
  { value: 4, label: "사회과학" },
  { value: 5, label: "언어" },
  { value: 6, label: "자연과학" },
  { value: 7, label: "기술과학" },
  { value: 8, label: "예술" },
  { value: 9, label: "문학" },
  { value: 10, label: "역사" },
];

const BookForm = ({ book, bookId, addBook, modifyBook, modified }) => {
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState({
    bookId: modified ? bookId : 0,
    title: "",
    author: "",
    publisher: "",
    publishedDate: "",
    isbn: "",
    totalCopies: "",
    bookIntro: "",
    authorIntro: "",
    tableOfContents: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    modified ? book.imagePath : null
  );
  console.log(bookId);
  useEffect(() => {
    if (modified && book) {
      const {
        title = "",
        author = "",
        publisher = "",
        publishedDate = "",
        isbn = "",
        totalCopies = "",
        bookIntro = "",
        authorIntro = "",
        tableOfContents = "",
        category = "",
      } = book;
      setBookDetails({
        bookId: modified ? bookDetails.bookId : 0,
        title,
        author,
        publisher,
        publishedDate,
        isbn,
        totalCopies,
        bookIntro,
        authorIntro,
        tableOfContents,
        category,
      });
      console.log(bookDetails);
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData 객체 생성하여 이미지와 도서 정보 전송
    const formData = new FormData();
    if (image && image !== "") {
      formData.append("image", image);
    }
    formData.append("bookId", bookDetails.bookId);
    formData.append("title", bookDetails.title);
    formData.append("author", bookDetails.author);
    formData.append("publisher", bookDetails.publisher);
    formData.append("publishedDate", bookDetails.publishedDate);
    formData.append("isbn", bookDetails.isbn);
    formData.append("totalCopies", bookDetails.totalCopies);
    formData.append("bookIntro", bookDetails.bookIntro);
    formData.append("authorIntro", bookDetails.authorIntro);
    formData.append("tableOfContents", bookDetails.tableOfContents);
    formData.append("category", bookDetails.category);

    try {
      modified ? await modifyBook(formData) : await addBook(formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          도서 정보 입력
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="책 제목"
                name="title"
                value={bookDetails.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="저자"
                name="author"
                value={bookDetails.author}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="출판사"
                name="publisher"
                value={bookDetails.publisher}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="출판일"
                name="publishedDate"
                InputLabelProps={{ shrink: true }}
                value={bookDetails.publishedDate}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ISBN번호"
                name="isbn"
                value={bookDetails.isbn}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="책 수량"
                name="totalCopies"
                type="number"
                value={bookDetails.totalCopies}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">카테고리</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={bookDetails.category}
                  onChange={handleChange}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="책 소개"
                name="bookIntro"
                multiline
                rows={4}
                value={bookDetails.bookIntro}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="저자 소개"
                name="authorIntro"
                multiline
                rows={4}
                value={bookDetails.authorIntro}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="목차"
                name="tableOfContents"
                multiline
                rows={4}
                value={bookDetails.tableOfContents}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-image"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="upload-image">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<ImageIcon />}
                >
                  책 이미지 업로드
                </Button>
              </label>
              {image && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={imagePreview}
                    alt="Book Preview"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                등록
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default BookForm;
