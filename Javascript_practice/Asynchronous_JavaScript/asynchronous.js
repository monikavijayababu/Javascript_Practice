/* Asynchronous javascript */

// 1. Callbacks
// 2. Promises
// 3. Async/Await

/* 1. Callbacks */

function fetchData1(callback) {
    setTimeout(function () {
        callback("Data fetched");
    }, 1000);
}

fetchData1(function (data) {
    console.log(data);
});



/* 2. Promises */

function fetchData2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData2().then(function (data) {
    console.log(data);
});



/* 3. Async/Await */

async function fetchData3() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched");
        }, 1000);
    });
}

async function fetchDataAndLog() {
    const data = await fetchData3();
    console.log(data);
}

fetchDataAndLog();

