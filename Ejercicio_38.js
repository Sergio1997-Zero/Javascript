for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5 - i; j++) {
                document.write("&ensp;");
            }
            for (let j = 0; j < 2 * i + 1; j++) {
                document.write("*");
            }
 
            document.write("</br>");
        }
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < i + 1; j++) {
                document.write("&ensp;");
            }
            for (let j = 0; j < 9 - 2 * i; j++) {
                document.write("*");
            }
 
            document.write("</br>");
        }