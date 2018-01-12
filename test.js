let url = "https://www.dropbox.com/s/ubs439m91ubcxhe/be-light.png?dl=0";

function formatThis(url) {
    let shareUrl = url.substring(0, url.indexOf("?") + 1);
    return shareUrl += "raw=1";
}

console.log(formatThis(url));
