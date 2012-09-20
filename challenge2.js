/* WIP! http://callumacrae.github.com/regex-tuesday/challenge2.html */
/* hex colors */
/^#([a-f0-9]{1,2})\1\1$/i

/* rgb/rgba colors */
/^rgb\(0*([0-9]{0,2}(\.[0-9])?%?),\s*0*\1,\s*0*\1\)|rgba\(0*([0-9]{0,2}(\.[0-9])?%?),\s*0*\3,\s*0*\3,0*([0-9]{0,2}(\.[0-9]+)?%?)\s*\)$/i