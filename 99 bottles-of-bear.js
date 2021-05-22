function generateSongText(text) {
    for(let i = text; i >= 1 ; i--) {
        let w1 = bottles(i);
        let w2 = bottles(i - 1);
        if (i -1 === 0) {
            console.log(`${i} ${w1} пива на стене, ${i} ${w1} пива! Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
        } else {
            console.log(`${i} ${w1} пива на стене, ${i} ${w1} пива! Возьми одну, пусти по кругу, ${i - 1} ${w2} бутылок пива на стене!`);
        }
    }
}
generateSongText(99);

function  bottles(num) {
    if (num % 10 === 1 && num % num !== 11) {
        return 'bottles';
    }
    else if (num % 10 >= 2 && num % 10 < 5) {
        return 'bottle';
    }
    else if (num >= 5 && num <= 99 || num == 0) {
        return 'bottles';
    }
}


