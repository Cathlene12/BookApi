/*

Requirements

Book
-ISBN           -string
-Title          -string
-Author         -[number]
-Language       -string
-NumOfPages     -number
-Categories     -[string]

Author 
-id             -number
-name           -string
-books          -[string]

Publications
-id             -number
-name           -string
-books          -[string]

---------API------------

Book
-GET
    -to get all books []
    -to get a specific book[]
    -to get a list of books based on category[]
    -to get a list of books based on author=

-POST
    -to add new book
    
-PUT
    -to update book details
    -to update/add new author

-DEL
    -delete a book
    -delete an author from book


Authors
-GET
    -to get all authors[]
    -to get specific author=
    -to get list of author based on a book

-POST
    -to add new author
    -to update/add new book
    
-PUT
    -update author details

-DELETE
    -delete an author

Publication
-GET
    -to get all publication
    -to get specific publication
    -to get a list of publication based on a book

-POST
    -add new publication 

-PUT
    -update publication
    -to update/add new book

-DELETE
    -delete a book from publication
    -delete a publication

    
*/