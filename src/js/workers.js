var i = 0;

/**
 * 計數。
 */
function timedCount() {
    i = i + 1;

    // postMessage() 方法 - 它用於向 HTML 頁面傳回一段消息。
    postMessage(i);

    setTimeout("timedCount()", 500);
}

timedCount();
