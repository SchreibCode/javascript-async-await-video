/*
 * Zuerst brauchen wir zwei Promises auf die wir warten können
 */

const promiseToGiveBook = new Promise((resolve, reject) => {
    // bookFound wird je nach Zufall entweder true oder false sein.
    const bookFound = Math.random() > 0.5 ? true : false;

    if (bookFound) {
        resolve("Hier hast du das Buch");
    } else {
        reject("Ich habe das Buch nicht gefunden");
    }
});

const promiseToGiveBookAdvice = new Promise((resolve, reject) => {
    resolve("PS: Kapitel 3 ist richtig gut");
});

/*
 * So wartet man auf die Promises mit then und catch
 */
function mitThenAufPromisesWarten() {
    promiseToGiveBook
        .then((message) => {
            console.log(message);
            return promiseToGiveBookAdvice;
        })
        .then((message) => console.log(message))
        .catch((error) => console.log(error));
}

//mitThenAufPromisesWarten();

/*
 * So wartet man auf die Promises mit async await
 */

async function mitAsyncAwaitAufPromisesWarten() {
    try {
        const message = await promiseToGiveBook;
        console.log(message);
        const advice = await promiseToGiveBookAdvice;
        console.log(advice);
    } catch (error) {
        console.log(error);
    }
}

mitAsyncAwaitAufPromisesWarten();
