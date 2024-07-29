package com.project.library_management.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//이름               널?       유형            
//---------------- -------- ------------- 
//BOOK_ID          NOT NULL NUMBER        
//TITLE            NOT NULL VARCHAR2(255) 
//AUTHOR           NOT NULL VARCHAR2(255) 
//PUBLISHED_DATE            DATE          
//ISBN                      VARCHAR2(20)  
//AVAILABLE_COPIES          NUMBER        
//TOTAL_COPIES              NUMBER        
//CREATED_AT                TIMESTAMP(6)  
//UPDATED_AT                TIMESTAMP(6)


//  도서정보를 나타내는 엔티티 클래스입니다.
//  이 클래스는 books 테이블과 매핑됩니다.
  

@AllArgsConstructor
@Setter
@Getter
public class Book {

	//각 도서를 식별하는 ID입니다.
	private long bookId;
	
	//도서의 제목입니다.
	private String title;

	//도서의 저자입니다.
	private String author;
	
	//도서의 출판날짜입니다.
	private LocalDate publishedDate;
	
	//도서의 isbn 번호입니다.
	private String isbn;
	
	//도서의 대출권수 입니다.
	private long availableCopies;
	
	//도서의 총 권수입니다.
	private long totalCopies;
	
	//해당 레코드가 생성된 날짜입니다.
	private LocalDateTime createdAt;
	
	//해당 레코드가 마지막으로 수정된 날짜입니다.
	private LocalDateTime updatedAt;
}
