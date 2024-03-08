interface Books{
    shuffle: Function;
}

function shuffleBooks(books:Books | null) {
    var result = books!.shuffle();
    return result;
}

// 위와 같은 효과
// function shuffleBooks(books:Books | null) {
//     if(books === null || books === undefined){
//         return;
//     }

//     var result = books.shuffle();
//     return result;
// }