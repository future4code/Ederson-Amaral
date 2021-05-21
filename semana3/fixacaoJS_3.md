~~~javascript	
    function calculaNota(ex, p1, p2) {
2	  let media = (p1 * 2) + (p2 * 3) + (ex * 1) / (2 + 3 + 1)
3	  if (media >= 9) {
4	    return 'A'
5	  } else if (media < 9 && media >= 7.5) {
6	    return 'B'
7	  } else if (media < 7.5 && media >= 6) {
8	    return 'C'
9	  } else {
10	    return 'D'
11	  }
12	}
~~~