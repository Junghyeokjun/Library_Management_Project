package com.project.library_management.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.project.library_management.entity.Book;
import com.project.library_management.entity.BookDetails;
import com.project.library_management.entity.Category;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//도서정보를 나타내는 DTO 클래스입니다.
//이 클래스는 Book,BookCategory,BookDetails 엔티티와 매핑됩니다.

@Getter
@Setter
@ToString
public class BookDto {

	// 각 도서를 식별하는 ID입니다.
	private long bookId;

	// 도서의 제목입니다.
	private String title;

	// 도서의 저자입니다.
	private String author;

	// 도서의 출판날짜입니다.
	private LocalDate publishedDate;

	// 도서의 isbn 번호입니다.
	private String isbn;

	// 도서의 대출권수 입니다.
	private long availableCopies;

	// 도서의 총 권수입니다.
	private long totalCopies;

	// 해당 레코드가 생성된 날짜입니다.
	private LocalDateTime createdAt;

	// 해당 레코드가 마지막으로 수정된 날짜입니다.
	private LocalDateTime updatedAt;

	// 도서의 이미지경로입니다.
	private String imagePath;

	// 도서의 출판사입니다.
	private String publisher;

	// 도서 카테고리를 식별하는 ID입니다.
	private List<Long> categoryIds;

	// 도서 소개입니다
	private String bookIntro;

	// 저자 소개입니다.
	private String authorIntro;

	// 도서의 목차입니다.
	private String tableOfContents;

	// 도서의 카테고리 목록입니다.
	private List<Category> categories;

	// Book 엔티티를 이용해 데이터를 입력하는 세터함수입니다.

	public void setBook(Book book) {
		this.setBookId(book.getBookId());
		this.setTitle(book.getTitle());
		this.setAuthor(book.getAuthor());
		this.setPublishedDate(book.getPublishedDate());
		this.setIsbn(book.getIsbn());
		this.setAvailableCopies(book.getAvailableCopies());
		this.setTotalCopies(book.getTotalCopies());
		this.setCreatedAt(book.getCreatedAt());
		this.setUpdatedAt(book.getUpdatedAt());
		this.setImagePath(book.getImagePath());
		this.setPublisher(book.getPublisher());
	}

	// Category 엔티티를 이용해 데이터를 입력하는 세터함수입니다.
	public void setCategory(Category category) {
		List<Long> categoryIds = new ArrayList<Long>();
		categoryIds.add(category.getCategoryId());
		this.setCategoryIds(categoryIds);
	}

	// Category 엔티티 리스트를 이용해 데이터를 입력하는 세터함수입니다.
	public void setCategories(List<Category> categories) {
		List<Long> categoryIds = new ArrayList<Long>();
		for (Category category : categories) {
			categoryIds.add(category.getCategoryId());
		}
		this.setCategoryIds(categoryIds);
	}
	
	//BookDetails 엔티티를 이용해 데이터를 입력하는 세터함수입니다.
	public void setBookDetails(BookDetails bookDetails) {
		this.setBookIntro(bookDetails.getBookIntro());
		this.setAuthorIntro(bookDetails.getAuthorIntro());
		this.setTableOfContents(bookDetails.getTableOfContents());
	}
}
