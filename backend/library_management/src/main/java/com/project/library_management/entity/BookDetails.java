package com.project.library_management.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//이름                널?       유형     
//----------------- -------- ------ 
//BOOK_ID           NOT NULL NUMBER 
//BOOK_INTRO                 CLOB   
//AUTHOR_INTRO               CLOB   
//TABLE_OF_CONTENTS          CLOB   

//도서의 상세정보를 나타내는 엔티티 클래스입니다.
//이 클래스는 book_details 테이블과 매핑됩니다.

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class BookDetails {
	
	//각 도서를 식별하는 ID입니다.
	private long bookId;
	
	//도서 소개입니다
	private String bookIntro;
	
	//저자 소개입니다.
	private String authorIntro;
	
	//도서의 목차입니다.
	private String tableOfContents;
}
