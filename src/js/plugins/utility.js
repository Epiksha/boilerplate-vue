export const copyToClipboard = text => {
    const element = document.createElement('textarea');

    element.value = text;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);

    element.select();
    document.execCommand('copy');

    document.body.removeChild(element);
};

export const htmlToText = html => {
    const tempElement = document.createElement('textarea');
    
    tempElement.innerHTML = html;

    return tempElement.childNodes.length === 0 ? '' : tempElement.childNodes[0].nodeValue;
};

export default {
    install(app) {
        const utility = {
            copyToClipboard,
            htmlToText,
        };

        app.utility = utility;
        app.prototype.utility = utility;
    },
};
