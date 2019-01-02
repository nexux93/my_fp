window.onload = function () {
// one


    var wordArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    var $abc = document.createElement('tr');

    for (var y = 0; y < wordArray.length; y++ ) {
        var $j = document.createElement('td');
        $j.classList.add('string_abc');
        $j.textContent = wordArray[y];
        $abc.appendChild($j);

    }

    var $table = document.createElement('table');

    $table.appendChild($abc);

    for (var i = 1; i < 9; i++) {
        var $tr = document.createElement('tr');

        for (var j = 1; j < 9; j++) {
            var $num = document.createElement('td');

            $num.className = 'row_number';
            $num.innerText += j;

            var $td = document.createElement('td');
            if (i % 2 == j % 2) {
                $td.className = 'white';
            } else {
                $td.className = 'black';
            }
            $tr.appendChild($td);
        }

        $table.appendChild($tr);
        $tr.appendChild($num);
    }
    document.body.appendChild($table);
};
