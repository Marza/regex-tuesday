/* 
	WIP! 8/11 atm

	http://callumacrae.github.com/regex-tuesday/challenge1.html
*/

/* Matcher */
/(.*)(\b\w+\b)(\s*)(\2)(.*)/i

/* Replacement */
$1$2$3<strong>$4</strong>$5