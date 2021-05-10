function generateSongText(text) {
    for(let i = text; i >= 1 ; i--) {
        console.log(`${i} бутылок пива на стене ${i} бутылок пива! Возьми одну, пусти по кругу ${i - 1} бутылок пива на стене!`);
    }
}
generateSongText(99);