function copyCode(button) {
    const code = button.previousSibling;
    const textArea = document.createElement('textarea');
    textArea.value = code.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    button.textContent = '已复制';
    setTimeout(() => {
        button.textContent = '复制代码';
    }, 2000);
}
async function updateCloudflareInfo() {
try {
    const response = await fetch('./cdn-cgi/trace');
    if (response.ok) {
    const data = await response.text();
    const lines = data.split('\n');
    const info = {};
    lines.forEach(line => {
        const parts = line.split('=');
        if (parts.length === 2) {
        info[parts[0]] = parts[1];
        }
    });
    const cfElement = document.getElementById('cf');
    const displayText = info.loc + " " + info.ip + " | " + info.colo + " | " + info.http +
        " | " + info.visit_scheme + " | " + info.tls + " | " + info.kex;
    cfElement.textContent = displayText;
    }
} catch (error) {
    console.error('获取Cloudflare节点信息失败: ', error);
}
}
window.addEventListener('load', updateCloudflareInfo);

//  12
function fc() {
    window.close();
    window.location = "https://www.amingg.com";
}

function ck() {
    console.profile();
    console.profileEnd();
    if (console.clear) {
        console.clear()
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}

function hehe() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        fc();
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        fc();
    }
}
hehe();
window.onresize = function() {
    if ((window.outerHeight - window.innerHeight) > 200) fc();
}

// you
document.oncontextmenu = function(event) {
    if (window.event) {
        event = window.event;
    }
    try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}
setInterval(function() {debugger}, 100);