for  (var i = 1 ; i <= 300;  i++)  {
		if ( i % 15 === 0)  {
			document.write(' 熊本さ ');
		} else if ( i % 12 === 0)  {
			document.write(' 肥後どこさ ');
		} else if ( i % 5 === 0)  {
			document.write( ' 肥後さ ');
		} else if ( i % 3 === 0 ) {
			document.write( ' あんたがた何処さ ' );
		} else {
		document.write('＊' + ' ' );
	}
}