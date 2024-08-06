package com.project.library_management.entity;

import java.sql.Date;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Book {

	// 각 도서를 식별하는 ID입니다.
	private long bookId;

	// 도서의 제목입니다.
	private String title;

	// 도서의 저자입니다.
	private String author;

	// 도서의 출판날짜입니다.
	private Date publishedDate;

	// 도서의 isbn 번호입니다.
	private String isbn;

	// 도서의 대출권수 입니다.
	private long availableCopies;

	// 도서의 총 권수입니다.
	private long totalCopies;

	// 해당 레코드가 생성된 날짜입니다.
	private Timestamp createdAt;

	// 해당 레코드가 마지막으로 수정된 날짜입니다.
	private Timestamp updatedAt;

	// 도서의 이미지경로입니다.
	private String imagePath;

	// 도서의 출판사입니다.
	private String publisher;

	// 1:n 관계 = 도서는 하나의 카테고리를 지닐나 카테고리는 여러 도서의 분류를 나타냅니다.
	private Category category;

	//1:1 관계 = 도서는 하나의 상세설명을 지닙니다.
	private BookDetails detail;
}
