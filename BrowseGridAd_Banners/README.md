This is intended to be used to be able to add, globally, single grid and double grid ads.
The Grid Ad Banner will be place in the chosen position in every product browse page at [www.c21stores.com](https://www.c21stores.com/) 


Color Legend
Green Area - will be always safe for copy/text and image
Blue Area - will is a place for image(if chosen). Take in consideration that  depending on screen resolutions, CTA might move a bit to that area. No place for copy/text
Red Area - No place for copy/text, this will be hidden in some screen resolutions


## SINGLE GRID BROWSE AD BANNERS

### Using it

Replace, as needed, the variables for: POSITION, IMAGE URL, CTA TEXT, CTA URL

``` 
	//POSITION
	var pos = Position Number goes here;
	//IMAGE URL
	var urlIMG = "New URL goes here between colons";
	//CTA TEXT
	var textLink = "SHOP NOW";
	//CTA URL
	var urlLINK = "Link URL goes here between colons";
```
### Creative Documentation:

This grid-ad occupies 1 product cell.
One option: Center-fixed

######CENTER-FIXED: 
For smaller screen resolutions, this grid-ad will respond being fixed to its center point.
* Image size (pixels): 370 x 552
* Safe Area (green) : Centered after padding of 44px  on each of its left and right sides
* CTA: 
	* Text align: Centered only
	* Vertically align: To the bottom with a max padding of 65px below.
* Live Sample: https://www.staging.c21.weblinc.com/categories/shoes-booties


![alt tag](https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDgvMTQvMTUvMjcvOTU3LzM3MHg1NTJndWlkZS5wbmciXV0/370x552guide.png?sha=d6f91024cbfa7d5a)


## DOUBLE GRID BROWSE AD BANNERS

### Using it

Replace, as needed, the variables for: POSITION, IMAGE URL, CTA TEXT, CTA URL. 
* Position cannot be a multiple of 3 (ex. 3, 6, 9, 12, etc)

``` 
	//POSITION
	var pos = Position Number goes here;
	//IMAGE URL
	var urlIMG = "New URL goes here between colons";
	//CTA TEXT
	var textLink = "SHOP NOW";
	//CTA URL
	var urlLINK = "Link URL goes here between colons";
```

### Creative Documentation:

This grid-ad occupies 2 product cells, and It cannot be place in any position multiple of 3  (ex: 3, 6, 9, 12…)
Two Options: Left-fixed or Center-fixed

######LEFT-FIXED: 
For smaller screen resolutions, this grid-ad will respond being fixed to its left point.
* Image size (pixels): 770 x 552
* Safe Area (green) : 584px from left side
* CTA: 
	* Text align: Centered only
	* Vertically align: To the bottom with a max padding of 37px below.
* Live Sample: https://www.staging.c21.weblinc.com/categories/shoes-booties

![alt tag](https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDgvMTQvNDcvMzIvNzg5Lzc3MHg1NTJfbGVmdF9ndWlkZS5wbmciXV0/770x552_left_guide.png?sha=69c6287eb02c21ae)


######CENTER-FIXED:
For smaller screen resolutions, this grid-ad will respond being fixed to its center point.
* Image size (pixels): 770 x 552  new size
* Safe Area (green) : Centered after padding of 91px  on each of its left and right sides
* CTA: 
	* Text align: Center only
	* Vertically align: To the bottom with a max padding of 36px below.

![alt tag](https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDgvMTQvNTIvMDkvNjQ0Lzc3MHg1NTJfbGVmdF9ndWlkZS5wbmciXV0/770x552_left_guide.png?sha=28e2a906b8e9d8d5)

## ANY GRID BROWSE AD BANNERS

### Using it

Replace, as needed, the variables for: TYPE, POSITION, IMAGE URL, CTA TEXT, CTA URL. 
* POSITION cannot be a multiple of 3 (ex. 3, 6, 9, 12, etc) on type 2 banners
* TYPE can only be 1 or 2

``` 
	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = Position Number goes here;
	//IMAGE URL
	var urlIMG = "New URL goes here between colons";
	//CTA TEXT
	var textLink = "SHOP NOW";
	//CTA URL
	var urlLINK = "Link URL goes here between colons";
```


## MULTIPLE (2) BROWSE GRID AD BANNERS

### Using it

Replace, as needed, the variables for: TYPE and POSITION, IMAGE URL, CTA TEXT, CTA URL for each of the Ads
* POSITION cannot be a multiple of 3 (ex. 3, 6, 9, 12, etc) on type 2 banners
* TYPE can only be 1 or 2

``` 
	//GRID AD TYPE:  enter 1 or 2
	var gaType1 = 1;
	var gaType2 = 2;

	//POSITION
	var pos1 = 3;
	var pos2 = 7;

	//IMAGE URL
	var urlIMG1 = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDUvMjcvMDkvMDkvMzcvNjc4LzM3MHg1NTMuanBnIl1d/370x553.jpg?sha=cdce0addc7721d54";
	var urlIMG2 = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDEvMjgvMTAvNDcvMDMvNTIyLzAyV2VlazNfQnJvd3NlR3JpZF9fRW5sYXJnZWRfaW1hZ2VzLmpwZyJdXQ/02Week3_BrowseGrid__Enlarged_images.jpg?sha=e2648a7818316693";

	//LINK TEXT
	var textLink1 = "SHOP NOW";
	var textLink2 = "NOW SHOP";

	//LINK URL
	var urlLINK1 = "#1";
	var urlLINK2 = "#2";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos1 = pos1-1;
	var realPos2 = pos2-1;
```


## Where to Place the code
Place ALL code at the end of the "JAVASCRIPT" container in the "Page/LAYOUT" area of the ROR CMS:

![alt tag](https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDEvMTEvMDgvMDYvOTc0L1NjcmVlbl9TaG90XzIwMTZfMDZfMDFfYXRfMTEuMDMuMThfQU0ucG5nIl1d/Screen%20Shot%202016-06-01%20at%2011.03.18%20AM.png?sha=6b211be4b6b046e3)


## Built With

* JQuery

## Version

1.0.0.0

## Authors

* **Juan Manuel Rios Villanueva** - * 

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under C21stores.com<!--  - see the [LICENSE.md](LICENSE.md) file for details -->

<!-- ## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
 -->